import { FC } from 'react'
import { useSelector } from 'react-redux'

import { Tabs as AntdTabs } from 'antd'

import { dataSelector } from '@/store/selectors/dataSelector'
import { IData } from '@/store/slices/dataSlice'

import List from '../List'

interface ITabChildrenMap {
  [key: string]: IData[]
}

const Tabs: FC = () => {
  const data = useSelector(dataSelector)

  const tabChildrenMap = {
    Visa: data.filter(({ type }) => type === 'visa'),
    Mastercard: data.filter(({ type }) => type === 'mastercard')
  } as ITabChildrenMap

  return (
    <AntdTabs
      defaultActiveKey="1"
      centered
      items={['Visa', 'Mastercard'].map((name, idx) => {
        return {
          label: name,
          key: `${idx}`,
          children: (
            <List>
              {tabChildrenMap[name].map(({ id, name, createdAt }) => {
                return (
                  // here is your component
                  <li key={id}>
                    <div>name: {name}</div>
                    <div>createdAt: {createdAt}</div>
                  </li>
                )
              })}
            </List>
          )
        }
      })}
    />
  )
}

export default Tabs
