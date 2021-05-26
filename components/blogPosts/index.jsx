import Link from 'next/link'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getFirstLetter } from '@/utils/helper'
import Card from '@/components/card/index'
import { styles } from './styles'

export default function BlogPosts ({ posts }) {
  const {
    orderedList,
    cardLink,
    descriptionContainer,
    blogTitleLink,
    blogTitle,
    excerpt
  } = styles

  return (
    <ol className={orderedList}>
      {posts.map((post, index) => (
        <li key={post.slug}>
          <div>
            <Link href={`/blog/${post.slug}`}>
              <a className={cardLink}>
                <Card data={post} asLink />
              </a>
            </Link>
          </div>
          <div className={descriptionContainer}>
            <Link href={`/blog/${post.slug}`}>
              <a className={blogTitleLink}>
                <h2 className={blogTitle}>{post.title}</h2>
              </a>
            </Link>
            <div className={excerpt}>
              {documentToReactComponents(post.excerpt.json)}
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}
