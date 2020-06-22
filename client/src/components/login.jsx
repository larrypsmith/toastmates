import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

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
  
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const updateField = (e, field) => {
    const updateFunction = (field === 'email'
      ? setEmail
      : setPassword
    )

    updateFunction(e.currentTarget.value);
  };

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
        onChange={e => updateField(e, 'email')}
        placeholder="email"
      />
      <input
        type="text"
        value={password}
        onChange={e => updateField(e, 'password')}
        placeholder="password"
      />
      <input type="submit" value="Login"/>
    </form>
  )
};

export default Login;