import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
    <Auth0Provider
      domain="whispir-tabs.au.auth0.com"
      clientId="rv7FbUY4fvJ3OkIKljPjappC0VbF4tbL"
      redirectUri={`${window.location.origin}`}
      audience="https://s1n5lju3i9.execute-api.ap-southeast-2.amazonaws.com/default/stablada-auth0-poc-lambda"
      scope="read:current_user"
    >
      <App />
    </Auth0Provider>,
  document.getElementById('root')
);
