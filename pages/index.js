import Head from 'next/head'
import Card from '@/components/Card'
import { getBlogPosts } from '@/lib/queries'

export async function getStaticProps () {
  const { blogPostCollection } = await getBlogPosts()

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
      <Card posts={posts} />
    </>
  )
}
