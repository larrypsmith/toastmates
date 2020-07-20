import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { InMemoryCache, ApolloClient, ApolloProvider } from '@apollo/client'
import { VERIFY_USER } from './mutations';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components/macro';
import theme from './theme';
import { makeVar } from "@apollo/client";

// const cache = new InMemoryCache({
//   dataIdFromObject: object => object.id || null
// });

export const isLoggedInVar = makeVar(false);
export const modalVar = makeVar(null);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return isLoggedInVar();
          }
        },
        modal: {
          read() {
            return modalVar();
          }
        }
      }

    }
  }
});

// cache.writeData({
//   data: {
//     isLoggedIn: false,
//     modal: null
//   }
// });

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkErrors', networkError);
  },
  cache,
  headers: {
    authorization: localStorage.getItem('auth-token')
  }
});

const token = localStorage.getItem("auth-token");

if (token) {
  debugger
  client.mutate({
    mutation: VERIFY_USER,
    variables: { token }
  })
    .then(({ data }) => {
      debugger
      isLoggedInVar(data.verifyUser.loggedIn)
    })
}

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
