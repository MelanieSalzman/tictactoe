import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Game from './components/Game'
import Login from './components/Login'
//Providers
import PlayersInfoContext, { players, setPlayersInfo } from './providers/playersInfo';

function App() {
  return (
    <div>
      <PlayersInfoContext.Provider value={players}>
        <Switch>
          <Route path="/game">
            <Game />
          </Route>

          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </PlayersInfoContext.Provider>
    </div>
  );
}

ReactDOM.render(

  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
