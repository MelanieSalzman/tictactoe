import React, { useState } from 'react'
import './styles.scss'
import LoginForm from '../../components/LoginForm'
import LoginButton from '../../components/LoginButton'
import { useHistory } from 'react-router-dom'
import useFirstPlayerState from '../../hooks/useFirstPlayerState'
import useSecondPlayerState from '../../hooks/useSecondPlayerState'
import useGameState from '../../hooks/useGameState'

const Login = () => {
  const [startGame, setStartGame] = useState(false)
  const { firstPlayer, setFirstPlayer } = useFirstPlayerState()
  const { secondPlayer, setSecondPlayer } = useSecondPlayerState()
  const { setGameState } = useGameState()

  const history = useHistory()

  const onSubmit = values => {
    values.playerId === 1 && setFirstPlayer(({ ...firstPlayer, ...values }))
    values.playerId === 2 && setSecondPlayer(({ ...secondPlayer, ...values }))

    setGameState({
      history: [{ squares: Array(9).fill(null) }],
      stepNumber: 0,
      xIsNext: true
    })

    history.push('/game')
  }

  return (
    <section className='playersSection'>
      <h2>Complete your profile to start playing</h2>
      <div className='formSection'>
        <LoginForm playerId={1} onSubmit={onSubmit} startGame={startGame} />
        <LoginForm playerId={2} onSubmit={onSubmit} startGame={startGame} />
      </div>
      <LoginButton text='Start game' onClick={() => setStartGame(true)} />
    </section>
  )
}

export default Login
