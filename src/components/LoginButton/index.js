import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'

const LoginButton = ({onClick}) => {
  return (
    <input type="submit" value="Play!" className="button" onClick={onClick} />
   // <Link to="/game" className="button" onClick={() =>onClick}>Play!</Link>
  )
}

export default LoginButton