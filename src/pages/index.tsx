import { Divider, Space } from 'antd'

import { NextPage } from 'next'

import Buttons from '@/components/Buttons'
import Tabs from '@/components/Tabs'
import { getStaticPropsGenerator } from '@/lib/getStaticPropsGenerator'

const Home: NextPage = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Tabs />
      <Divider />
      <Buttons />
    </Space>
  )
}

export const getStaticProps = getStaticPropsGenerator(async (context, store) => {
  return {
    props: {}
  }
})

export default Home
