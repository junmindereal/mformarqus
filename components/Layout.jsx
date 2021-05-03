import Header from './Header'
import Footer from './Footer'

export default function Layout ({ children }) {
  return (
    <article className='max-w-sm p-4 mx-auto md:max-w-full lg:px-6 lg:pb-6 lg:max-w-6xl'>
      <Header />
      <section>
        {children}
      </section>
      <Footer />
    </article>
  )
}
