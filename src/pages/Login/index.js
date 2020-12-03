import React, { useState } from 'react'
import './styles.scss'
import LoginForm from '../../components/LoginForm'
import LoginButton from '../../components/LoginButton'
import { useHistory } from 'react-router-dom'
import useGame from '../../hooks/useGame'

/* global localStorage */

const Login = () => {
  const [player1, setPlayer1] = useState(null)
  const [player2, setPlayer2] = useState(null)
  const { resetGame } = useGame()
  const history = useHistory()

  const onSubmit = () => {
    localStorage.setItem('players', JSON.stringify([player1, player2]))
    resetGame()
    history.push('/game')
  }

  return (
    <section className='playersSection'>
      <h2>Complete your profile to start playing</h2>
      <div className='formSection'>
        <LoginForm playerId={1} onValuesChange={setPlayer1} />
        <LoginForm playerId={2} onValuesChange={setPlayer2} />
      </div>
      <LoginButton text='Start game' onClick={onSubmit} />
    </section>
  )
}

export default Login
