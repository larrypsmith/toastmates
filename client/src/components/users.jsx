import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_USERS = gql`
  {
    users {
      id
      name {
        first
        last
      }
    }
  }
`;

function Users() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <ul>
      {
        data.users.map(user => (
          <li key={user.id}>
            First name: {user.name.first}
            Last name: {user.name.last}
            id: {user.id}
          </li>
        ))
      }
    </ul>
  )
};

export default Users;