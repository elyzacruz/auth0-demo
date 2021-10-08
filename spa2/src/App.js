import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import logo from './logo.svg';
import './App.css';
import Loading from './components/Loading';
import Profile from "./components/Profile";
import Home from "./components/Home";
import Nav from "./components/Nav";
import CallApi from "./actionComponents/CallApi";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

function App() {
  const { error } = useAuth0();

  // useEffect(async() => {
  //   const x = await getAccessTokenSilently();
  //   console.info('A_T: ', x);
  // },[]);
  

  if (error) {
    console.error('Error', error);
    return <div>Oops... {error.message}</div>;
  }

  return (
    <Router history={history}>
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>SPA 2</p>
        <Switch>
            <Redirect key="redirect" exact from="/" to="/profile" />
            {/* <Route exact path="/" component={Profile} /> */}
            <Route path="/profile" component={Profile} />
            <Route path="/callApi" component={CallApi} />
          </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
