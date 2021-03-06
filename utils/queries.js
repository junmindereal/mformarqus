import { GraphQLClient, gql } from 'graphql-request'

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}`

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.ACCESS_TOKEN}`
  }
})

export async function getBlogPost (slug) {
  const postQuery = gql`
    query getBlogSpot($slug: String!) {
      blogPostCollection(where: {slug: $slug}) {
        items {
          title
          thumbnail {
            url
            width
            height
            title
            description
          }
          content {
            json
          }
          slug
          publishedDate
        }
      }
    }
  `
  return graphQLClient.request(postQuery, { slug })
}

export async function getBlogPosts () {
  const postsQuery = gql`
    {
      blogPostCollection {
        items {
          title
          thumbnail {
            url
            width
            height
            title
            description
          }
          excerpt {
            json
          }
          slug
        }
      }
    }
  `
  return graphQLClient.request(postsQuery)
}

export async function getAbout () {
  const postsQuery = gql`
    {
      aboutCollection {
        items {
          title
          thumbnail {
            url
            width
            height
            title
            description
          }
          content {
            json
          }
        }
      }
    }
  `
  return graphQLClient.request(postsQuery)
}
