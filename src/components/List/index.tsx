import { FC } from 'react'

import Item from './components/Item'
import { StyledList } from './style'

const List: FC<{ items: any[] }> = ({ items }) => (
  <StyledList>
    {items.map((item, idx) => (
      <Item key={idx} item={item} />
    ))}
  </StyledList>
)

export default List
