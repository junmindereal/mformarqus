import Image from 'next/image'
import tinytime from 'tinytime'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getFirstLetter } from '@/utils/helper'
import { styles } from './styles'

const publishedDateTemplate = tinytime('{dddd}, {MMMM} {DD}, {YYYY}')

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
          <time dateTime={post.publishedDate} className={time}>
            {publishedDateTemplate.render(new Date(post.publishedDate))}
          </time>
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
