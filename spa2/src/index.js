import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
    <Auth0Provider
      domain="whispir-tabs.au.auth0.com"
      clientId="lgJOE63EZdBrzDBpMmqEGPpqGUFUqEIe"
      redirectUri={`${window.location.origin}`}
      audience="https://whispir-tabs.au.auth0.com/api/v2/"
      scope="read:current_user"
    >
      <App />
    </Auth0Provider>,
  document.getElementById('root')
);
