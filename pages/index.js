import Head from 'next/head'
import { GraphQLClient, gql } from 'graphql-request'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export async function getStaticProps () {
  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}`

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.ACCESS_TOKEN}`
    }
  })

  const postsQuery = gql`
    {
      blogPostCollection {
        items {
          title
          excerpt {
            json
          }
          slug
        }
      }
    }
  `

  const { blogPostCollection } = await graphQLClient.request(postsQuery)

  return {
    props: { posts: blogPostCollection.items }
  }
}

export default function Home ({ posts }) {
  return (
    <>
      <Head>
        <title>M For Marqus</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='text-5xl'>Hello World</h1>
      <ol>
        {posts.map(post => (
          <li key={post.slug}>
            <h1>{post.title}</h1>
            <div>{documentToReactComponents(post.excerpt.json)}</div>
          </li>
        ))}
      </ol>
    </>
  )
}
