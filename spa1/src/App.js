import React, {Fragment} from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import NotFound from './components/NotFound';
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./components/Profile";
import Nav from "./components/Nav";
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
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p>SPA 1</p>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/profile" component={Profile} />
            <Route path="/callApi" component={CallApi} /> */}
            

          </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
