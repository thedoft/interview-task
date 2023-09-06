import { Provider as StoreProvider } from 'react-redux'

import { ConfigProvider as AntdConfigProvider } from 'antd'
import { ThemeConfig } from 'antd/es/config-provider/context'
import ruRU from 'antd/locale/ru_RU'

import type { AppProps } from 'next/app'

import 'dayjs/locale/ru'
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components'

import Application from '../application'
import { wrapper } from '../store'

const defaultTheme: DefaultTheme = {
  colors: {
    background: 'white'
  }
}

const NextApp = ({ Component, router, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest)

  const antdTheme: ThemeConfig = {
    token: {
      colorBgLayout: defaultTheme.colors.background
    }
  }

  return (
    <StyledThemeProvider theme={defaultTheme}>
      <AntdConfigProvider locale={ruRU} theme={antdTheme}>
        <StoreProvider store={store}>
          <Application Component={Component} pageProps={props.pageProps} router={router} />
        </StoreProvider>
      </AntdConfigProvider>
    </StyledThemeProvider>
  )
}

export default NextApp
