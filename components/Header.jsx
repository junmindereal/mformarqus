import Link from 'next/link'

export default function Header ({ children }) {
  return (
    <header className='flex items-center justify-between mt-4 mb-8'>
      <Link href='/'>
        <a className='flex items-center'>
          <svg className='w-10 h-full' viewBox='0 0 123 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M0.948154 80H29.1754V34.1818C29.1754 27.3295 32.755 23.1364 38.5845 23.1364C44.4141 23.1364 48.1982 27.3295 48.1982 34.1818V80H75.1982V34.1818C75.1982 27.3295 78.7777 23.1364 84.6072 23.1364C90.4368 23.1364 94.2209 27.3295 94.2209 34.1818V80H122.448V27.0227C122.448 10.9148 112.119 0.431819 97.0845 0.431819C85.4254 0.431819 76.0163 6.77272 73.3572 16.3864H72.5391C70.9027 6.77272 62.1072 0.431819 51.0618 0.431819C40.1697 0.431819 31.8345 6.56818 28.5618 16.3864H27.7436V1.45454H0.948154V80Z' fill='url(#paint0_linear)' />
            <defs>
              <linearGradient id='paint0_linear' x1='2' y1='2' x2='124' y2='87.5' gradientUnits='userSpaceOnUse'>
                <stop stopColor='#0284C7' />
                <stop offset='0.987579' stopColor='#0D9488' />
              </linearGradient>
            </defs>
          </svg>
        </a>
      </Link>
      <Link href='/'>
        <a className='text-lg font-medium text-gray-600 xl:hover:text-gray-900'>About</a>
      </Link>
    </header>
  )
}
