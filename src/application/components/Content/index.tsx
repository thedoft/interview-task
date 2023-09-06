import { FC, PropsWithChildren } from 'react'

import { StyledContent } from './style'

const Content: FC<PropsWithChildren> = ({ children }) => {
  return <StyledContent>{children}</StyledContent>
}

export default Content
