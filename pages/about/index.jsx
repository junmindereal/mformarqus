import { getAbout } from '@/utils/queries'

export async function getStaticProps () {
  const { aboutCollection } = await getAbout()

  return {
    props: { about: aboutCollection.items[0] }
  }
}

export default function About ({ about }) {
  return (
    <h1>{about.title}</h1>
  )
}
