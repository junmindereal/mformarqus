import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getBlogPosts, getBlogPost } from '@/lib/queries'

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
      <h1 className='text-5xl'>{post.title}</h1>
      <div>{documentToReactComponents(post.body.json)}</div>
    </>
  )
}
