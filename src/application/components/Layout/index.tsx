import { FC, PropsWithChildren } from 'react'

import Content from '../Content'
import Footer from '../Footer'
import Header from '../Header'

import { StyledLayout } from './style'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </StyledLayout>
  )
}

export default Layout
