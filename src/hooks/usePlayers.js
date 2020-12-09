import { useState, useEffect } from 'react'

/* global localStorage */

const usePlayers = () => {
  const [players, setPlayers] = useState(
    JSON.parse(localStorage.getItem('players'))
  )

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(players))
  }, [players])

  return { players, setPlayers }
}

export default usePlayers
