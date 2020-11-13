import React, { useState } from 'react'
import './styles.css'
import LoginButton from '../LoginButton'
import TextInput from '../TextInput'
import { setPlayersInfo } from '../../providers/playersInfo'
import { Redirect } from 'react-router-dom'

const Login = () => {
  const [players, setPlayers] = useState({ firstPlayer: '', secondPlayer: '' });
  const [areNamesCorrect, setAreNamesCorrect] = useState(false)
  const TITLE = 'Tic Tac Toe Intergalactic'
  const SUBTITLE = 'Conquer planets with your friends'
  const FORM_TITLE = 'Enter your names to start playing'

  const handleChange = (event) => {
    setPlayers({
      ...players,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = () => {
    if(validatePlayerNames(players)){
    setPlayersInfo({ firstPlayer: players.firstPlayer, secondPlayer: players.secondPlayer });
    setAreNamesCorrect(true)
    } else{
      alert("Debes completar los campos correctamente")
    }
  }

  const validatePlayerNames = () => {
    const firstPlayer = players.firstPlayer
    const secondPlayer = players.secondPlayer
    return firstPlayer && secondPlayer && firstPlayer !== secondPlayer
  }

  return (

    <div className='container'>
      <div className='splashText'>
        <p className='title'>{TITLE}</p>
        <p className='subtitle'>{SUBTITLE}</p>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <h4>{FORM_TITLE}</h4>
        <TextInput name="firstPlayer" placeholder="Player 1" onChange={handleChange} />
        <TextInput name="secondPlayer" placeholder="Player 2" onChange={handleChange} />
        <LoginButton onClick={handleSubmit} />
        {areNamesCorrect && <Redirect to="/game" />}
      </form>
    </div>
  )
}

export default Login

