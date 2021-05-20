import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getFirstLetter } from '@/utils/helper'
import { styles } from './styles'

export default function BlogDetail ({ post }) {
  const {
    article,
    content,
    time,
    title,
    cardContainer,
    card,
    letterContainer,
    firstLetter,
    imageContainer,
    image,
    imageTitle
  } = styles

  return (
    <>
      <article className={article}>
        <section className={content}>
          <time dateTime='2021-04-14T16:01:00.000Z'>Thursday, April 15, 2021</time>
          <h1 className={title}>{post.title}</h1>
          <div>{documentToReactComponents(post.content.json)}</div>
        </section>
        <section className={cardContainer}>
          <figure className={card}>
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
            <figcaption className={imageTitle}>{post.thumbnail.title}</figcaption>
          </figure>
        </section>
      </article>
    </>
  )
}
