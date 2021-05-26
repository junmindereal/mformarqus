import Image from 'next/image'
import { getFirstLetter } from '@/utils/helper'
import { styles } from './styles'

export default function Card ({ data, asLink }) {
  const {
    card,
    cardAsLink,
    letterContainer,
    firstLetter,
    imageContainer,
    image,
    imageTitle
  } = styles

  return (
    <figure className={asLink ? cardAsLink : card}>
      <div className={letterContainer}>
        <span className={firstLetter}>
          <span>{getFirstLetter(data.thumbnail.title)}</span>
          <span>{getFirstLetter(data.thumbnail.title).toLowerCase()}</span>
        </span>
      </div>
      <div className={imageContainer}>
        <Image
          src={data.thumbnail.url}
          width={data.thumbnail.width}
          height={data.thumbnail.height}
          className={image}
        />
      </div>
      <figcaption className={imageTitle}>{data.thumbnail.title}</figcaption>
    </figure>
  )
}
