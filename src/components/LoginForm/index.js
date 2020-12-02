import React, { useState, useEffect } from 'react'
import TextInput from '../TextInput'
import './styles.scss'
import PlanetsList from '../PlanetsList'

const LoginForm = ({ playerId, onSubmit, startGame }) => {
  const [playerName, setPlayerName] = useState('')
  const [planetId, setPlanetId] = useState(0)
  const [validate, setValidate] = useState(true)

  const FORM_TITLE = 'Player ' + playerId

  const handleSubmit = () => {
    const values = { playerId, playerName, planetId }
    if (validatePlayer(values)) {
      onSubmit(values)
    } else {
      setValidate(false)
    }
  }

  useEffect(() => {
    return startGame ? handleSubmit() : null
  }, [startGame, handleSubmit])

  const onSelect = id => {
    setPlanetId(id)
  }

  return (
    <div className='form'>
      <h3>{FORM_TITLE}</h3>
      <TextInput name={playerId} placeholder='Enter your name' onChange={(e) => setPlayerName(e.target.value)} validate={validate} />
      <p>Choose your planet</p>
      <div className='planets'>
        <PlanetsList onSelect={onSelect} playerId={playerId} />
      </div>
    </div>
  )
}

const validatePlayer = values => {
  const { playerId, playerName, planetId } = values
  return playerId !== null && playerName !== '' && planetId !== null
}

export default LoginForm
