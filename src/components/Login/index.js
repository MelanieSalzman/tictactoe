import React, { useState } from 'react'
import './styles.css'
import LoginButton from '../LoginButton'
import TextInput from '../TextInput'

const Login = () => {

  const [players, setPlayers] = useState({ firstPlayer: '', secondPlayer: '' });

  const handleChange = (event) => {
    setPlayers({
      ...players,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    alert("Player 1 is " + players.firstPlayer + ' and Player 2 is ' + players.secondPlayer);
    event.preventDefault();
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
        <LoginButton />
      </form>
    </div>
  )
}

export default Login

