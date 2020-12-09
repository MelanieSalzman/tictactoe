import React, { useState, useEffect } from 'react'
import TextInput from '../TextInput'
import './styles.scss'
import PlanetsList from '../PlanetsList'

const LoginForm = ({ playerId, onValuesChange }) => {
  const FORM_TITLE = 'Player ' + playerId
  const [validate, setValidate] = useState(true)
  const [values, setValues] = useState({ playerId, planetId: 0, playerName: '' })

  useEffect(() => {
    if (validatePlayer(values)) {
      onValuesChange(values)
    } else {
      setValidate(false)
    }
  }, [values, onValuesChange])

  return (
    <div className='form'>
      <h3>{FORM_TITLE}</h3>
      <TextInput
        name={playerId}
        placeholder='Enter your name'
        onChange={e =>
          setValues({
            ...values,
            playerName: e.target.value
          })}
        validate={validate}
      />
      <p>Choose your planet</p>
      <div className='planets'>
        <PlanetsList
          onSelect={id =>
            setValues({
              ...values,
              planetId: id
            })}
          playerId={playerId}
        />
      </div>
    </div>
  )
}

const validatePlayer = values => {
  const { playerId, playerName, planetId } = values
  return playerId !== null && playerName !== '' && planetId !== null
}

export default LoginForm
