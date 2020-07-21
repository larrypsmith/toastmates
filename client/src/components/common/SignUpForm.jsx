import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { isLoggedInVar } from '../../cache';
import AuthFormContainer from './AuthFormContainer';
import AuthFormContinueButton from './AuthFormContinueButton';
import AuthFormError from './AuthFormError';
import AuthFormInput from './AuthFormInput';
import AuthFormInstructions from './AuthFormInstructions';
import DemoUserButton from './DemoUserButton';
import Flex from './Flex';
import LoginFormLink from './LoginFormLink';
import useControlledInput from '../../hooks/useControlledInput';
// import useRegister from '../../hooks/useRegister';
import useCloseModal from '../../hooks/useCloseModal';

const REGISTER_USER = gql`
  mutation register($email: String!, $password: String!, $fname: String!, $lname: String!) {
    register(email: $email, password: $password, fname: $fname, lname: $lname) {
      email
      token
      loggedIn
    }
  }
`;

const SignUpForm = () => {
  const [email, updateEmail] = useControlledInput('');
  const [password, updatePassword] = useControlledInput('');
  const [firstName, updateFirstName] = useControlledInput('');
  const [lastName, updateLastName] = useControlledInput('');
  const [error, setError] = useState();
  const closeModal = useCloseModal();

  const [registerUser, { data }] = useMutation(
    REGISTER_USER,
    {
      onCompleted: (data) => {
        const { token } = data.register;
        localStorage.setItem('auth-token', token);
        console.log('localStorage: ', localStorage.getItem('auth-token'));
        isLoggedInVar(data.register.loggedIn);
        closeModal();
      },
      onError: err => setError(err.message)
    }
  );

  let isFormReady = true;
  for (let field of [email, password, firstName, lastName]) {
    if (!field.length) isFormReady = false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser({
      variables: {
        email,
        password,
        fname: firstName,
        lname: lastName
      }
    });
  };

  return (
    <AuthFormContainer onSubmit={handleSubmit}>
      <AuthFormInstructions weight={400} size='18px'>
        Enter your name, email, and password
      </AuthFormInstructions>
      <Flex
        parent
        direction={['column', 'row']}
        justify="space-between"
      >
        <AuthFormInput
          placeholder="First Name"
          value={firstName}
          onChange={updateFirstName}
          />
        <AuthFormInput
          placeholder="Last Name"
          value={lastName}
          onChange={updateLastName}
          
        />
      </Flex>
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
      <LoginFormLink />
    </AuthFormContainer>
  )
};

export default SignUpForm;