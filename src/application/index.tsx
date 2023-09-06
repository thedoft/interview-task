import { FC } from 'react'

import { AppProps } from 'next/app'
import Head from 'next/head'

import Layout from './components/Layout'
import { GlobalStyle } from './style'

const Application: FC<AppProps & { onChangeTheme: (theme: 'light' | 'dark') => void }> = ({
  Component,
  pageProps,
  onChangeTheme
}) => {
  return (
    <>
      <Head>
        <title>Покодим :)</title>
      </Head>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} onChangeTheme={onChangeTheme} />
      </Layout>
    </>
  )
}

export default Application
