import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getBlogPosts, getBlogPost } from '@/utils/queries'

export async function getStaticPaths () {
  const { blogPostCollection } = await getBlogPosts()
  const paths = blogPostCollection.items.map(post => {
    return {
      params: {
        slug: post.slug
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps (context) {
  const { blogPostCollection } = await getBlogPost(context.params.slug)
  const props = {
    post: blogPostCollection.items[0]
  }

  return { props }
}

export default function BlogPost ({ post }) {
  return (
    <>
      <article className='grid lg:grid-cols-3 lg:gap-6'>
        <section className='prose max-w-none lg:prose-lg dark:prose-dark xl:col-span-2'>
          <time dateTime='2021-04-14T16:01:00.000Z'>Thursday, April 15, 2021</time>
          <h1 className='bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600'>{post.title}</h1>
          <div>{documentToReactComponents(post.content.json)}</div>
        </section>
      </article>
    </>
  )
}
