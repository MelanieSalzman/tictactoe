import saturn from '../assets/images/saturn.png'
import earth from '../assets/images/earth.png'
import jupiter from '../assets/images/jupiter.png'

const planets = [{
  id: 0,
  name: 'saturn',
  src: saturn
},
{
  id: 1,
  name: 'earth',
  src: earth
},
{
  id: 2,
  name: 'jupiter',
  src: jupiter
}]

const getPlanetSrcById = (planetId) => {
  const planet = planets.find(planet => planet.id === planetId)
  return planet.src
}

export { planets, getPlanetSrcById }
