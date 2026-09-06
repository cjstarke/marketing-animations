// @ts-ignore
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../utils/gsap'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Layout>
        <Component {...pageProps} topPageMargin="" />
      </Layout>
    </main>
  )
}
