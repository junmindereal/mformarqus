import tinytime from 'tinytime'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Card from '@/components/card/index'
import { styles } from './styles'

const publishedDateTemplate = tinytime('{dddd}, {MMMM} {DD}, {YYYY}')

export default function BlogDetail ({ post }) {
  const {
    article,
    time,
    title,
    content,
    aside
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
        <aside className={aside}>
          <Card data={post} />
        </aside>
      </article>
    </>
  )
}
