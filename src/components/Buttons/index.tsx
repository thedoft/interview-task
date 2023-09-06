import { FC } from 'react'

import { Button, Space } from 'antd'

const Buttons: FC = () => {
  const buttons = [
    {
      text: 'light',
    },
    {
      text: 'dark',
    }
  ]

  return (
    <Space size="large" style={{ width: '100%', justifyContent: 'center' }}>
      {buttons.map((b, idx) => (
        <Button key={idx}>
          {b.text}
        </Button>
      ))}
    </Space>
  )
}

export default Buttons
