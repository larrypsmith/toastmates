import React from 'react';
import AuthFormContainer from './AuthFormContainer';
import AuthFormContinueButton from './AuthFormContinueButton';
import AuthFormInput from './AuthFormInput';
import AuthFormInstructions from './AuthFormInstructions';
import DemoUserButton from './DemoUserButton';
import Flex from './Flex';
import LoginFormLink from './LoginFormLink';
import useControlledInput from '../../hooks/useControlledInput';
import useRegister from '../../hooks/useRegister';
import useCloseModal from '../../hooks/useCloseModal';


const SignUpForm = () => {
  const [email, updateEmail] = useControlledInput('');
  const [password, updatePassword] = useControlledInput('');
  const [firstName, updateFirstName] = useControlledInput('');
  const [lastName, updateLastName] = useControlledInput('');
  const register = useRegister();
  const closeModal = useCloseModal();

  let isFormReady = true;
  for (let field of [email, password, firstName, lastName]) {
    if (!field.length) isFormReady = false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password, firstName, lastName);
    closeModal();
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
      <AuthFormContinueButton type='submit' disabled={!isFormReady}>
        Continue
      </AuthFormContinueButton>
      <DemoUserButton />
      <LoginFormLink />
    </AuthFormContainer>
  )
};

export default SignUpForm;