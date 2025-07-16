import { gql, GraphQLClient } from 'graphql-request'
import Image from 'next/image'
type Post = {
  title: string
  paragraph: string
  image: {
    url: string
    alt: string
  }
  category?: string // Optional if not always present
}

const client = new GraphQLClient('https://graphql.datocms.com/', {
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN!}`,
  },
})

export async function generateStaticParams() {
  const query = gql`
    {
      allPosts {
        slug
      }
    }
  `
  const data = await client.request(query)
  return data.allPosts.map((post: any) => ({
    slug: post.slug,
  }))
}

async function getPost(slug: string): Promise<Post> {
  const query = gql`
    query PostBySlug($slug: String) {
      post(filter: { slug: { eq: $slug } }) {
        title
        paragraph
        category
        image {
          url
          alt
        }
      }
    }
  `
  const data = await client.request(query, { slug })
  return data.post
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      {/* tampilkan image */}
      <Image
        src={post.image.url}
        alt={post.image.alt}
        width={600}
        height={400}
        className="mb-4"
        priority
      />
      {post.category && (
        <div className="mt-2 text-sm">
          Kategori: {post.category}
        </div>
      )}
      <div className="mt-4 whitespace-pre-line">{post.paragraph}</div>
    </div>
  )
}
