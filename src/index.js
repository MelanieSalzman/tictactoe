import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Game from './components/Game'
import Login from './components/Login'

function App() {
    return (
        <div>
            <Switch>
                {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}
                <Route path="/game">
                    <Game />
                </Route>
                {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </div>
    );
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);