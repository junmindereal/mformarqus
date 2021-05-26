import Header from '@/components/header/index'
import Footer from '@/components/footer/index'
import { styles } from './styles'

export default function Layout ({ children }) {
  const { article, blogPosts } = styles
  return (
    <article className={article}>
      <Header />
      <section className={blogPosts}>
        {children}
      </section>
      <Footer />
    </article>
  )
}
