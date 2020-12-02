import React, { useState, useContext } from 'react'
import './styles.scss'
import LoginForm from '../../components/LoginForm'
import LoginButton from '../../components/LoginButton'
import { useHistory } from 'react-router-dom'
import { FirstPlayerContext } from '../../providers/firstPlayerData'
import { SecondPlayerContext } from '../../providers/secondPlayerData'
import useSetGameState from '../../hooks/useSetGameState'

const Login = () => {
  const [startGame, setStartGame] = useState(false)
  const [, setFirstPlayer] = useContext(FirstPlayerContext)
  const [, setSecondPlayer] = useContext(SecondPlayerContext)
  const { setState } = useSetGameState()
  const history = useHistory()

  const onSubmit = values => {
    values.playerId === 1 && setFirstPlayer(firstPlayer => ({ ...firstPlayer, ...values }))
    values.playerId === 2 && setSecondPlayer(secondPlayer => ({ ...secondPlayer, ...values }))

    setState({
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
