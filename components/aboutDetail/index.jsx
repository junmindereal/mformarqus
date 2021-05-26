import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Card from '@/components/card/index'
import { styles } from './styles'

export default function AboutDetail ({ about }) {
  const {
    article,
    title,
    content,
    aside
  } = styles

  return (
    <>
      <article className={article}>
        <section className={content}>
          <h1 className={title}>{about.title}</h1>
          <div>{documentToReactComponents(about.content.json)}</div>
        </section>
        <aside className={aside}>
          <Card data={about} />
        </aside>
      </article>
    </>
  )
}
