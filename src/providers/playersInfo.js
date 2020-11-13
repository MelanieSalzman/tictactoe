import { createContext } from "react";

let players = { 
  firstPlayer: "",
  secondPlayer: ""
};

const setPlayersInfo = obj => (players = { players, ...obj });
const PlayersInfoContext = createContext(null);

export { players, setPlayersInfo };
export default PlayersInfoContext;