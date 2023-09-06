import { FC } from 'react'

import { StyledFooter } from './style'

const Footer: FC = () => {
  return <StyledFooter>Мы тебе точно перезвоним (c) {new Date().getFullYear()}</StyledFooter>
}

export default Footer
