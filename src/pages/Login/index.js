import React from 'react'
import './styles.scss'
import { useHistory } from 'react-router-dom'
import { setPlayersInfo } from '../../providers/playersInfo'
import LoginForm from '../../components/LoginForm'

const TITLE = 'Tic Tac Toe Intergalactic'
const SUBTITLE = 'Conquer planets with your friends'

const Login = () => {
  const history = useHistory()

  const onSubmit = (values) => {
    setPlayersInfo(values)
    history.push('/game')
  }

  return (
    <div className='container'>
      <div className='splashText'>
        <p className='title'>{TITLE}</p>
        <p className='subtitle'>{SUBTITLE}</p>
      </div>
      <LoginForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login
