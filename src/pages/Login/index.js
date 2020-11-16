import React, { useState } from 'react'
import './styles.scss'
import TextInput from './components/TextInput'
import { setPlayersInfo } from '../../providers/playersInfo'
import { useHistory } from "react-router-dom";

const TITLE = 'Tic Tac Toe Intergalactic'
const SUBTITLE = 'Conquer planets with your friends'
const FORM_TITLE = 'Enter your names to start playing'

const validatePlayerNames = ({ firstPlayer, secondPlayer }) => {
  return firstPlayer && secondPlayer && firstPlayer !== secondPlayer
}

const Login = () => {
  const history = useHistory();
  const [firstPlayer, setFirstPlayer] = useState('')
  const [secondPlayer, setSecondPlayer] = useState('')
  
  const handleSubmit = () => {
    if (validatePlayerNames({ firstPlayer, secondPlayer })) {
      setPlayersInfo({ firstPlayer, secondPlayer });
      history.push("/game")
    } else {
      alert("Debes completar los campos correctamente")
    }
  }

  return (
    <div className='container'>
      <div className='splashText'>
        <p className='title'>{TITLE}</p>
        <p className='subtitle'>{SUBTITLE}</p>
      </div>
      {/*mover a componente aparte*/}
      <form onSubmit={handleSubmit} className="form">
        <h4>{FORM_TITLE}</h4>
        <TextInput name="firstPlayer" placeholder="Player 1" onChange={(e) => setFirstPlayer(e.target.value)} />
        <TextInput name="secondPlayer" placeholder="Player 2" onChange={(e) => setSecondPlayer(e.target.value)} />
        <button type="submit" >Play!</button>
      </form>
    </div>
  )
}

export default Login

