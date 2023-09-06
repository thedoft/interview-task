import { useState } from 'react'
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

const darkTheme: DefaultTheme = {
  colors: {
    background: 'lightgrey'
  }
}

const NextApp = ({ Component, router, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest)

  const [theme, setTheme] = useState('light')

  const onChangeTheme = (theme: 'light' | 'dark') => {
    setTheme(theme)
  }

  const antdTheme: ThemeConfig = {
    token: {
      colorBgLayout: theme === 'light' ? defaultTheme.colors.background : darkTheme.colors.background
    }
  }

  return (
    <StyledThemeProvider theme={theme === 'light' ? defaultTheme : darkTheme}>
      <AntdConfigProvider locale={ruRU} theme={antdTheme}>
        <StoreProvider store={store}>
          <Application
            Component={Component}
            pageProps={props.pageProps}
            router={router}
            onChangeTheme={onChangeTheme}
          />
        </StoreProvider>
      </AntdConfigProvider>
    </StyledThemeProvider>
  )
}

export default NextApp
