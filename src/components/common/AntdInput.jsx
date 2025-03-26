import React from 'react'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Input } from 'antd'


const AntdInput = ({label, type, placeholder,required="false",errorMessage,...props}) => {
  return (
    <>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-normal mb-2">{label}
        {required && <i style={{color: "red"}}>*</i>}
      </label>
      {type === 'password' ? (
        <Input.Password
          placeholder={placeholder}
          className="custom-input w-full p-2 h-10"
          iconRender={(visible) =>
            visible ? <EyeTwoTone twoToneColor="#4d008c" /> : <EyeInvisibleOutlined />
          }
          {...props}
        />
      ) : (
        <Input
          type={type}
          placeholder={placeholder}
          className="custom-input w-full p-2 h-10"
          {...props}
        />
      )}
       {errorMessage && (
          <span style={{ color: "red", fontSize: "12px" }}>{errorMessage}</span>
        )}
    </div>
    </>
  )
}

export default AntdInput



