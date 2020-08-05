import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloClient, ApolloProvider } from '@apollo/client'
import { VERIFY_USER } from './mutations';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components/macro';
import theme from './theme';
import cache, { isLoggedInVar } from './cache';
import Cart from './Cart';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
  headers: {
    authorization: localStorage.getItem('auth-token')
  }
});

const token = localStorage.getItem("auth-token");

if (token) {
  client.mutate({
    mutation: VERIFY_USER,
    variables: { token }
  })
    .then(({ data }) => {
      isLoggedInVar(data.verifyUser.loggedIn)
    })
}

window.addEventListener('load', Cart.writeFromStorage);
window.addEventListener('beforeunload', Cart.writeToStorage);

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();