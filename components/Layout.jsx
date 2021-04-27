import Header from './Header'

export default function Layout ({ children }) {
  return (
    <article className='max-w-sm p-4 mx-auto md:max-w-full lg:px-8 lg:pb-8 lg:max-w-8xl'>
      <Header />
      <section>
        {children}
      </section>
      <footer />
    </article>
  )
}
