import Link from 'next/link'
import { useRouter } from 'next/router'
import { styles } from './styles'

export default function Header ({ children }) {
  const {
    header,
    logoContainer,
    logoText,
    nav,
    navLink
  } = styles

  const router = useRouter()

  return (
    <header className={header}>
      {router.pathname === '/'
        ? (
          <div className={logoContainer}>
            <span className='sr-only'>M for Marqus home page</span>
            <svg className='w-10 h-full' viewBox='0 0 160 105' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M0 105H37.1717V44.5373C37.1717 35.4949 41.8855 29.9614 49.5623 29.9614C57.2391 29.9614 62.2222 35.4949 62.2222 44.5373V105H97.7778V44.5373C97.7778 35.4949 102.492 29.9614 110.168 29.9614C117.845 29.9614 122.828 35.4949 122.828 44.5373V105H160V35.09C160 13.8335 146.397 0 126.599 0C111.246 0 98.8552 8.3676 95.3535 21.054H94.2761C92.1212 8.3676 80.5387 0 65.9933 0C51.6498 0 40.6734 8.09768 36.3636 21.054H35.2862V1.34961H0V105Z' fill='url(#paint0_linear)' />
              <defs>
                <linearGradient id='paint0_linear' x1='1.38503' y1='2.0694' x2='162.264' y2='114.582' gradientUnits='userSpaceOnUse'>
                  <stop stopColor='#FB923C' />
                  <stop offset='0.987579' stopColor='#DB2777' />
                </linearGradient>
              </defs>
            </svg>
            <span className={logoText}>for marqus</span>
          </div>
          )
        : (
          <Link href='/'>
            <a className={logoContainer}>
              <span className='sr-only'>M for Marqus home page</span>
              <svg className='w-10 h-full' viewBox='0 0 160 105' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M0 105H37.1717V44.5373C37.1717 35.4949 41.8855 29.9614 49.5623 29.9614C57.2391 29.9614 62.2222 35.4949 62.2222 44.5373V105H97.7778V44.5373C97.7778 35.4949 102.492 29.9614 110.168 29.9614C117.845 29.9614 122.828 35.4949 122.828 44.5373V105H160V35.09C160 13.8335 146.397 0 126.599 0C111.246 0 98.8552 8.3676 95.3535 21.054H94.2761C92.1212 8.3676 80.5387 0 65.9933 0C51.6498 0 40.6734 8.09768 36.3636 21.054H35.2862V1.34961H0V105Z' fill='url(#paint0_linear)' />
                <defs>
                  <linearGradient id='paint0_linear' x1='1.38503' y1='2.0694' x2='162.264' y2='114.582' gradientUnits='userSpaceOnUse'>
                    <stop stopColor='#FB923C' />
                    <stop offset='0.987579' stopColor='#DB2777' />
                  </linearGradient>
                </defs>
              </svg>
              <span className={logoText}>for marqus</span>
            </a>
          </Link>
          )}
      <nav className={nav}>
        <Link href='/'>
          <a className={navLink}>About</a>
        </Link>
      </nav>
    </header>
  )
}
