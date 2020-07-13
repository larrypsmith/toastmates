import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import useControlledInput from '../../hooks/useControlledInput';

const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      name {
        first
        last
      }
      email
      loggedIn
      token
    }
  }
`;

function Login() {
  const updateCache = (client, { data }) => {
    client.writeData({
      data: { isLoggedIn: data.login.loggedIn }
    })
  }
  
  const [loginUser, { data }] = useMutation(
    LOGIN_USER,
    {
      onCompleted: (data) => {
        const { token } = data.login;
        localStorage.setItem('auth-token', token);
        console.log('auth token:', localStorage.getItem('auth-token'))
      },
      update: (client, data) => updateCache(client, data)
    }
  );
  
  let [email, updateEmail] = useControlledInput('');
  let [password, updatePassword] = useControlledInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({
      variables: {
        email,
        password
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={email}
        onChange={updateEmail}
        placeholder="email"
      />
      <input
        type="text"
        value={password}
        onChange={updatePassword}
        placeholder="password"
      />
      <input type="submit" value="Login"/>
    </form>
  )
};

export default Login;