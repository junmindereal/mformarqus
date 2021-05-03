import Link from 'next/link'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getFirstLetter } from '@/utils/helper'

export default function Card ({ posts }) {
  return (
    <ol className='grid grid-cols-1 gap-10 md:gap-4 lg:gap-6 md:grid-cols-2 xl:grid-cols-3 '>
      {posts.map((post, index) => (
        <li key={post.slug}>
          <div>
            <Link href={`/blog/${post.slug}`}>
              <a className='relative flex flex-col items-start justify-center p-6 bg-gray-100 dark:shadow-none dark:bg-gray-900 rounded-2xl hover:bg-gradient-to-br hover:from-orange-400 hover:to-pink-600'>
                <div className='flex items-end'>
                  <span className='relative text-4xl font-semibold'>
                    <span>{getFirstLetter(post.thumbnail.title)}</span>
                    <span>{getFirstLetter(post.thumbnail.title).toLowerCase()}</span>
                  </span>
                </div>
                <div className='mx-auto w-52'>
                  <Image
                    src={post.thumbnail.url}
                    width={post.thumbnail.width}
                    height={post.thumbnail.height}
                    className='w-full h-full'
                  />
                </div>
                <div className='block w-full text-4xl font-semibold text-center'>{post.thumbnail.title}</div>
              </a>
            </Link>
          </div>
          <div className='mt-4'>
            <Link href={`/blog/${post.slug}`}>
              <a className='inline-block'>
                <h2 className='inline-block text-2xl font-semibold leading-tight hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-600'>{post.title}</h2>
              </a>
            </Link>
            <div className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
              {documentToReactComponents(post.excerpt.json)}
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}
