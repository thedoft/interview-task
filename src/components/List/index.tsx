import { FC, PropsWithChildren } from 'react'

import { StyledList } from './style'

const List: FC<PropsWithChildren> = ({ children }) => <StyledList>{children}</StyledList>

export default List
