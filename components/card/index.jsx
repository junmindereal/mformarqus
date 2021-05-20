import Link from 'next/link'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getFirstLetter } from '@/utils/helper'
import { styles } from './styles'

export default function Card ({ posts }) {
  const {
    orderedList,
    cardLink,
    letterContainer,
    firstLetter,
    imageContainer,
    image,
    imageTitle,
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
                <div className={letterContainer}>
                  <span className={firstLetter}>
                    <span>{getFirstLetter(post.thumbnail.title)}</span>
                    <span>{getFirstLetter(post.thumbnail.title).toLowerCase()}</span>
                  </span>
                </div>
                <div className={imageContainer}>
                  <Image
                    src={post.thumbnail.url}
                    width={post.thumbnail.width}
                    height={post.thumbnail.height}
                    className={image}
                  />
                </div>
                <div className={imageTitle}>{post.thumbnail.title}</div>
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
