import { FC } from 'react'

import { Button, Space } from 'antd'

const Buttons: FC<{ onChangeTheme: (theme: 'light' | 'dark') => void }> = ({ onChangeTheme }) => {
  const buttons = [
    {
      text: 'light',
      onClick: (theme: 'light' | 'dark') => {
        onChangeTheme(theme)
      }
    },
    {
      text: 'dark',
      onClick: (theme: 'light' | 'dark') => {
        onChangeTheme(theme)
      }
    }
  ]

  return (
    <Space size="large" style={{ width: '100%', justifyContent: 'center' }}>
      {buttons.map((b, idx) => (
        <Button key={idx} onClick={() => b.onClick(b.text as 'light' | 'dark')}>
          {b.text}
        </Button>
      ))}
    </Space>
  )
}

export default Buttons
