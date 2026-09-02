import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactNode, useState, useEffect } from 'react'
import Layout from '../components/Layout'
import {
  ConvergePageContextProvider,
  useConvergePage,
} from '../contexts/ConvergePageContext'
// Import centralized GSAP configuration
import '../utils/gsap'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConvergePageContextProvider>
      <main>
        <Layout>
          <Component
            {...pageProps}
            topPageMargin=""
          />
        </Layout>
      </main>
    </ConvergePageContextProvider>
  )
}
