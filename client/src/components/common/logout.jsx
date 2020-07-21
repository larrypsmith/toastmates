import React from 'react';
import { ApolloConsumer } from 'react-apollo';
import { isLoggedIn } from '../../cache';

function logout() {
  const handleClick = (e, client) => {
    e.stopPropagation();
    e.preventDefault();

    localStorage.removeItem("auth-token");
    isLoggedInVar(false);
  }

  return (
    <ApolloConsumer>
      {
        client => (
          <button onClick={(e) => handleClick(e, client)}>Logout</button>
        )
      }
    </ApolloConsumer>
  )
}

export default logout;