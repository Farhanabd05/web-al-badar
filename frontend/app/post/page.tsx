import Link from 'next/link'
import { getAllPosts } from '@/lib/datocms'

type Post = {
  id: string
  title: string
  slug: string
  paragraph: string
  category: string
  image: {
    url: string
    alt: string
  }
}

export default async function PostPage() {
  const data = await getAllPosts()
  const posts = data.allPosts

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Blog Posts Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">📝 Daftar Post</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: Post) => (
              <li key={post.id} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <Link href={`/post/${post.slug}`}>
                  <div className="cursor-pointer">
                    {/* Image */}
                    <div className="h-48 bg-gray-200 overflow-hidden">
                      <img 
                        src={post.image?.url || '/placeholder-image.jpg'} 
                        alt={post.image?.alt || post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-4">
                      {/* Category */}
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                        {post.category || 'Umum'}
                      </span>
                      
                      {/* Title */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600">
                        {post.title}
                      </h3>
                      
                      {/* Paragraph preview */}
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {post.paragraph}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}