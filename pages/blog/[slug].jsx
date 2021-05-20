import { getBlogPosts, getBlogPost } from '@/utils/queries'
import BlogDetail from '@/components/blogDetail/index'

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
    <BlogDetail post={post} />
  )
}
