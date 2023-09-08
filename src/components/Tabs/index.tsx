import { FC } from 'react'

import { Tabs as AntdTabs } from 'antd'

import List from '../List'

const Tabs: FC<any> = ({ data }) => {
  return (
    <AntdTabs
      defaultActiveKey="1"
      centered
      items={['type 1', 'type 2'].map((name, idx) => {
        return {
          label: name,
          key: `${idx}`,
          children: <List items={['test 1', 'test 2']} />
        }
      })}
    />
  )
}

export default Tabs
