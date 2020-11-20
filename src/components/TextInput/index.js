import React from 'react'
import './styles.scss'

const TextInput = ({ name, placeholder, onChange }) => {
  return (
    <input type='text' placeholder={placeholder} onChange={onChange} name={name} className='input' />
  )
}

export default TextInput
