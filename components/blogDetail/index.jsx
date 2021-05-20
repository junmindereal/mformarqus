import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { styles } from './styles'

export default function BlogDetail ({ post }) {
  const {
    article,
    content,
    time,
    title
  } = styles

  return (
    <>
      <article className={article}>
        <section className={content}>
          <time dateTime='2021-04-14T16:01:00.000Z'>Thursday, April 15, 2021</time>
          <h1 className={title}>{post.title}</h1>
          <div>{documentToReactComponents(post.content.json)}</div>
        </section>
      </article>
    </>
  )
}
