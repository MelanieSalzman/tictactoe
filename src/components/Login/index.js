import React, { useState } from 'react'
import './styles.css'
import LoginButton from '../LoginButton'
import TextInput from '../TextInput'
//Providers
import { setPlayersInfo } from '../../providers/playersInfo';

const Login = () => {

  const [players, setPlayers] = useState({ firstPlayer: '', secondPlayer: '' });

  const handleChange = (event) => {
    setPlayers({
      ...players,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = () => {
    setPlayersInfo({
      firstPlayer: players.firstPlayer,
      secondPlayer:players.secondPlayer
    });
  }

  return (

    <div className='grid'>
      <div className='splashText'>
        <h1>Tic Tac Toe Intergalactic</h1>
        <h3>Conquer planets with your friends</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <h4>Enter your names to start playing</h4>
        <TextInput name="firstPlayer" placeholder="Player 1" onChange={handleChange} />
        <TextInput name="secondPlayer" placeholder="Player 2" onChange={handleChange} />
        <LoginButton onClick={handleSubmit} />
      </form>
    </div>
  )
}

export default Login

