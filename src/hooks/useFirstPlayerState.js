import { useState, useEffect } from 'react'

/* global localStorage */
const useFirstPlayerState = () => {
  const [firstPlayer, setFirstPlayer] = useState(null)

  useEffect(() => {
    setFirstPlayer(JSON.parse(localStorage.getItem('firstPlayer')))
  }, [])

  return {
    firstPlayer,
    setFirstPlayer: (firstPlayer) => {
      setFirstPlayer(firstPlayer)
      localStorage.setItem('firstPlayer', JSON.stringify(firstPlayer))
    }
  }
}

export default useFirstPlayerState
