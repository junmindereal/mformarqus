import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'
import Layout from '@/components/Layout/index'

function MyApp ({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
