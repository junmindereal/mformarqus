import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

function handleBackgroundColor (index) {
  let bg = ''

  switch (true) {
    case ((index + 1) % 2 === 0):
      bg = 'from-orange-400 to-pink-600'
      break
    default:
      bg = 'from-cyan-400 to-blue-600'
  }

  return bg
}

export default function Card ({ posts }) {
  return (
    <ol className='grid grid-cols-1 gap-4'>
      {posts.map((post, index) => (
        <li
          key={post.slug}
          className={`flex flex-col justify-center items-center min-h-[343px] px-6 py-8 rounded-xl bg-gradient-to-br ${handleBackgroundColor(index)}`}
        >
          <Link href={`/blog/${post.slug}`}>
            <a className='inline-block mb-4 text-4xl font-bold text-white'><h2>{post.title}</h2></a>
          </Link>
          <div className='text-base leading-tight text-white'>{documentToReactComponents(post.excerpt.json)}</div>
        </li>
      ))}
    </ol>
  )
}
