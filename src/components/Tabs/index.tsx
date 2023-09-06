import { FC } from 'react'

import { Tabs as AntdTabs } from 'antd'

import List from '../List'

const Tabs: FC = () => {
  return (
    <AntdTabs
      defaultActiveKey="1"
      centered
      items={[].map((name, idx) => {
        return {
          label: name,
          key: `${idx}`,
          children: <List></List>
        }
      })}
    />
  )
}

export default Tabs
