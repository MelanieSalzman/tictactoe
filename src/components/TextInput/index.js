import React from 'react'
import './styles.scss'

const TextInput = ({ name, placeholder, onChange, validate }) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      className={validate === false ? 'inputNotValid' : 'input'}
    />
  )
}

export default TextInput
