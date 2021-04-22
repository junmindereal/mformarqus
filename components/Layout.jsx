import Header from './Header'

export default function Layout ({ children }) {
  return (
    <article className='p-4'>
      <Header />
      <section>
        {children}
      </section>
      <footer />
    </article>
  )
}
