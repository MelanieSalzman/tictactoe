import { useState, useEffect } from 'react'

/* global localStorage */
const useSecondPlayerState = () => {
  const [secondPlayer, setSecondPlayer] = useState(null)

  useEffect(() => {
    setSecondPlayer(JSON.parse(localStorage.getItem('secondPlayer')))
  }, [])

  return {
    secondPlayer,
    setSecondPlayer: (secondPlayer) => {
      setSecondPlayer(secondPlayer)
      localStorage.setItem('secondPlayer', JSON.stringify(secondPlayer))
    }
  }
}

export default useSecondPlayerState
