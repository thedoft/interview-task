import { Divider, Space } from 'antd'

import { NextPage } from 'next'

import Buttons from '@/components/Buttons'
import Tabs from '@/components/Tabs'
import { getStaticPropsGenerator } from '@/lib/getStaticPropsGenerator'
import { fetchDataAction } from '@/store/actions/fetchDataAction'

const Home: NextPage<{ onChangeTheme: (theme: 'light' | 'dark') => void }> = ({ onChangeTheme }) => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Tabs />
      <Divider />
      <Buttons onChangeTheme={onChangeTheme} />
    </Space>
  )
}

export const getStaticProps = getStaticPropsGenerator(async (context, store) => {
  await store.dispatch(fetchDataAction())

  return {
    props: {}
  }
})

export default Home
