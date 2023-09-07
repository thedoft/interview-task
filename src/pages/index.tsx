import { Divider, Space } from 'antd'

import { NextPage } from 'next'

import Tabs from '@/components/Tabs'
import { getStaticPropsGenerator } from '@/lib/getStaticPropsGenerator'

import { json } from '../data'

const Home: NextPage<any> = ({ data }) => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Tabs data={data} />
      <Divider />
    </Space>
  )
}

export const getStaticProps = getStaticPropsGenerator(async (context, store) => {
  return {
    props: {
      data: json
    }
  }
})

export default Home
