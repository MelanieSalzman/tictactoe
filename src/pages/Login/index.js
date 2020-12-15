import React, { useState } from 'react'
import './styles.scss'
import PlayerFields from '../../components/PlayerFields'
import LoginButton from '../../components/LoginButton'
import { useHistory } from 'react-router-dom'
import useGame from '../../hooks/useGame'
import usePlayers from '../../hooks/usePlayers'

const Login = () => {
  const [player1, setPlayer1] = useState(null)
  const [player2, setPlayer2] = useState(null)
  const { setPlayers } = usePlayers()
  const [validate, setValidate] = useState(null)
  const { resetGame } = useGame()
  const history = useHistory()

  const onSubmit = () => {
    if (validatePlayer(player1) && validatePlayer(player2)) {
      setValidate(true)
      setPlayers([player1, player2])
      resetGame()
      history.push('/game')
    } else {
      setValidate(false)
    }
  }

  return (
    <section className='playersSection'>
      <h2>Complete your profile to start playing</h2>
      <div className='formSection'>
        <PlayerFields playerId={1} onValuesChange={setPlayer1} validate={validate} />
        <PlayerFields playerId={2} onValuesChange={setPlayer2} validate={validate} />
      </div>
      <LoginButton text='Start game' onClick={onSubmit} />
    </section>
  )
}

const validatePlayer = player => {
  const { playerId, playerName, planetId } = player
  return playerId !== null && playerName !== '' && planetId !== null
}

export default Login
