import React from 'react'
import { useHistory } from 'react-router-dom'
import './styles.scss'
import LoginButton from '../../components/LoginButton'
import rocket from '../../assets/images/rocket.png'

const TITLE = 'Tic Tac Toe Intergalactic'
const SUBTITLE = 'Conquer planets with your friends'

const Landing = () => {
  const history = useHistory()

  return (
    <div className='container'>
      <section className='splashSection'>
        <div className='introSection'>
          <p className='title'>{TITLE}</p>
          <p className='subtitle'>{SUBTITLE}</p>
          <LoginButton text='Play now' onClick={() => history.push('/login')} />
        </div>
        <img src={rocket} alt='rocket' className='rocket' id='rocket' />
      </section>
    </div>
  )
}

export default Landing
