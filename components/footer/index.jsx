import { React, useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { styles } from './styles'

export default function Footer () {
  const {
    footer,
    copyright,
    copyrightPrefix,
    copyrightLink,
    btnDark,
    btnLight
  } = styles

  const link = 'https://timeline.junmin.dev/'

  const { theme, setTheme } = useTheme()

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }
  }

  if (!isMounted) return null

  return (
    <footer className={footer}>
      <div className={copyright}>
        <span className={copyrightPrefix}>Made by</span>
        <a
          className={copyrightLink}
          href={link}
          rel='noreferrer'
          target='_blank'
        >
          Junmin De Real
        </a>
      </div>
      {theme === 'light'
        ? (
          <button className={btnDark} onClick={switchTheme}>
            <span className='sr-only'>Toggle Dark mode</span>
            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' /></svg>
          </button>
          )
        : (
          <button className={btnLight} onClick={switchTheme}>
            <span className='sr-only'>Toggle Light mode</span>
            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z' clipRule='evenodd' /></svg>
          </button>
          )}
    </footer>
  )
}
