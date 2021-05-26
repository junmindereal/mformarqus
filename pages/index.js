import Head from 'next/head'
import BlogPosts from '@/components/blogPosts/index'
import { getBlogPosts } from '@/utils/queries'

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
      <BlogPosts posts={posts} />
    </>
  )
}
