import Head from 'next/head'
import { GraphQLClient, gql } from 'graphql-request'

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
          slug
        }
      }
    }
  `

  const posts = await graphQLClient.request(postsQuery)

  return {
    props: { posts }
  }
}

export default function Home ({ posts }) {
  console.log(posts)

  return (
    <>
      <Head>
        <title>M For Marqus</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='text-5xl'>Hello World</h1>
    </>
  )
}
