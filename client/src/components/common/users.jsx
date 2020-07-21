import React from 'react';
import { useQuery, gql } from '@apollo/client';

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
            <br/>
            Last name: {user.name.last}
            <br/>
            id: {user.id}
          </li>
        ))
      }
    </ul>
  )
};

export default Users;