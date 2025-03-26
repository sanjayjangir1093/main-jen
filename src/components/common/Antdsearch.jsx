import { AutoComplete, Input } from 'antd'
import React, { useState } from 'react'


const Antdsearch = ({placeholder, options, onSearch, onSelect, ...props}) => {

  return (
   <>
   <AutoComplete
      style={{ width: "100%", height: "40px" }}
      options={options}
      placeholder={placeholder}
      onSearch={onSearch}
      onSelect={onSelect}
      {...props}
    >
      {/* <Input.Search size="large" /> */}
    </AutoComplete>
   </>
  )
}

export default Antdsearch;
