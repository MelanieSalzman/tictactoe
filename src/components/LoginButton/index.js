import React from 'react'
import './styles.scss'

const LoginButton =
  ({ text, onClick }) => {
    return (
      <button
        className='button'
        onClick={onClick}
      >
        {text}
      </button>
    )
  }

export default LoginButton
