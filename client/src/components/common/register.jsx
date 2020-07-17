import React from 'react';
import { useMutation, gql } from '@apollo/client';


const REGISTER_USER = gql`
  mutation RegisterUser($fname: String!, $lname: String!, $email: String!, $password: String!) {
    register(fname: $fname, lname: $lname, email: $email, password: $password) {
      email
      token
      loggedIn
    }
  }
`;

function Register() {
  const updateCache = (client, { data }) => {
    client.writeData({
      data: { isLoggedIn: data.register.loggedIn }
    });
  }
  const [registerUser, { data }] = useMutation(
    REGISTER_USER,
    {
      onCompleted: (data) => {
        const { token } = data.register;
        localStorage.setItem('auth-token', token);
        console.log('localStorage: ', localStorage.getItem('auth-token'));
      },
      update: (client, data) => updateCache(client, data)
    }
  );

  const handleClick = (e) => {
    e.preventDefault();
    registerUser({
      variables: {
        fname: 'user',
        lname: 'user',
        email: 'user@user.com',
        password: 'user'
      }
    })
  }

  return (
    <button onClick={handleClick}>CLICK ME TO REGISTER A NEW USER</button>
  )
};

export default Register;