import React from 'react';
import { ApolloConsumer } from 'react-apollo';

function logout() {
  const handleClick = (e, client) => {
    e.stopPropagation();
    e.preventDefault();

    localStorage.removeItem("auth-token");
    client.writeData({
      data: {
        isLoggedIn: false
      }
    })
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