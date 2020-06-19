import gql from 'graphql-tag';
import React from 'react';
import { useMutation } from '@apollo/react-hooks';


const REGISTER_USER = gql`
  mutation RegisterUser($fname: String!, $lname: String!, $email: String!, $password: String!) {
    register(fname: $fname, lname: $lname, email: $email, password: $password) {
      email
      token
      loggedIn
    }
  }
`;

function Auth() {
  const [registerUser, { data }] = useMutation(
    REGISTER_USER,
    {
      onCompleted: (data) => {
        const { token } = data.register;
        localStorage.setItem('auth-token', token);
        console.log('localStorage: ', localStorage.getItem('auth-token'));
      }
    }
  );

  const handleClick = (e) => {
    e.preventDefault();
    registerUser({
      variables: {
        fname: 'Larry',
        lname: 'Bird',
        email: 'larry@bird.com',
        password: 'password'
      }
    })
  }

  return (
    <button onClick={handleClick}>CLICK ME TO REGISTER A NEW USER</button>
  )
};

export default Auth;