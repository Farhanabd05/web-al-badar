// frontend/lib/datocms.ts
import { GraphQLClient, gql } from 'graphql-request'

const endpoint = 'https://graphql.datocms.com/'
const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN!}`,
  },
})

export const getAllPosts = async () => {
  const query = gql`
    {
      allPosts {
        id
        title
        slug
        paragraph
        category
        image {
          url
          alt
        }
      }
    }
  `
  return client.request(query)
}
