import React, { useState } from 'react'
import TextInput from '../TextInput'
import './styles.scss'
const FORM_TITLE = 'Enter your names to start playing'

const LoginForm = ({ onSubmit }) => {
  const [firstPlayer, setFirstPlayer] = useState('')
  const [secondPlayer, setSecondPlayer] = useState('')

  const handleSubmit = () => {
    const values = { firstPlayer, secondPlayer }
    if (validatePlayerNames(values)) {
      onSubmit(values)
    } else {
      window.alert('Debes completar los campos correctamente')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <h4>{FORM_TITLE}</h4>
      <TextInput name='firstPlayer' placeholder='Player 1' onChange={(e) => setFirstPlayer(e.target.value)} />
      <TextInput name='secondPlayer' placeholder='Player 2' onChange={(e) => setSecondPlayer(e.target.value)} />
      <button type='submit'>Play!</button>
    </form>
  )
}

const validatePlayerNames = ({ firstPlayer, secondPlayer }) => {
  return firstPlayer && secondPlayer && firstPlayer !== secondPlayer
}

export default LoginForm
