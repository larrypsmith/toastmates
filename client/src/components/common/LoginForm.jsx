import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import AuthFormContinueButton from './AuthFormContinueButton';
import AuthFormContainer from './AuthFormContainer';
import AuthFormError from './AuthFormError';
import AuthFormInput from './AuthFormInput';
import AuthFormInstructions from './AuthFormInstructions';
import DemoUserButton from './DemoUserButton';
import SignUpFormLink from './SignUpFormLink';
import useControlledInput from '../../hooks/useControlledInput';
import useCloseModal from '../../hooks/useCloseModal';
import { isLoggedInVar, redirectVar } from '../../cache';

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
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

const LoginForm = () => {
  const [email, updateEmail] = useControlledInput('');
  const [password, updatePassword] = useControlledInput('');
  const [error, setError] = useState();
  const closeModal = useCloseModal();
  const history = useHistory();

  const [login] = useMutation(
    LOGIN_USER,
    {
      onCompleted: (data) => {
        const { token } = data.login;
        localStorage.setItem('auth-token', token);
        console.log('auth token:', localStorage.getItem('auth-token'));
        isLoggedInVar(data.login.loggedIn);

        if (redirectVar()) {
          history.push(redirectVar());
          redirectVar('');
        }
        closeModal();
      },
      onError: (err) => setError(err.message),
    }
  );

  let isFormReady = true;
  for (let field of [email, password]) {
    if (!field.length) isFormReady = false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      variables: {
        email,
        password
      }
    });
  };

  return (
    <AuthFormContainer onSubmit={handleSubmit}>
      <AuthFormInstructions weight={400} size='18px'>
        Enter your email and password
      </AuthFormInstructions>
      <AuthFormInput
        placeholder="Email"
        value={email}
        onChange={updateEmail}
      />
      <AuthFormInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={updatePassword}
      />
      <AuthFormError error={error} />
      <AuthFormContinueButton type='submit' disabled={!isFormReady}>
        Continue
      </AuthFormContinueButton>
      <DemoUserButton />
      <SignUpFormLink />
    </AuthFormContainer>
  )
};

export default LoginForm;