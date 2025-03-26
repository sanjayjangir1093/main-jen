import { Button } from 'antd'
import React from 'react'

const AntdButton = ({text,loading,type="primary",className='',...props}) => {
  return (
    <>
    <Button
    type={type}
    className={className}
    loading={loading}
    {...props}
    >
    {text}
    </Button>
    </>
  )
}

export default AntdButton
