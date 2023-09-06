import { FC } from 'react'

import { AppProps } from 'next/app'
import Head from 'next/head'

import Layout from './components/Layout'
import { GlobalStyle } from './style'

const Application: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Покодим :)</title>
      </Head>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default Application
