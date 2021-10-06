import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import LoginButton from './components/Login';
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./components/Profile";
import Home from "./components/Home";
import CallApi from "./actionComponents/CallApi";
// import history from "./utils/history";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

function App() {
  const { error } = useAuth0();

  if (error) {
    console.error('Error', error);
    return <div>Oops... {error.message}</div>;
  }

  return (
    <Router history={history}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginButton />
        <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/callApi" component={CallApi} />
          </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
