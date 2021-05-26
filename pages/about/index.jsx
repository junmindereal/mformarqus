import { getAbout } from '@/utils/queries'
import AboutDetail from '@/components/aboutDetail/index'

export async function getStaticProps () {
  const { aboutCollection } = await getAbout()

  return {
    props: { about: aboutCollection.items[0] }
  }
}

export default function About ({ about }) {
  return (
    <AboutDetail about={about} />
  )
}
