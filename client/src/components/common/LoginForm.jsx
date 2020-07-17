import React from 'react';
import AuthFormContinueButton from './AuthFormContinueButton';
import AuthFormContainer from './AuthFormContainer';
import AuthFormInput from './AuthFormInput';
import AuthFormInstructions from './AuthFormInstructions';
import DemoUserButton from './DemoUserButton';
import SignUpFormLink from './SignUpFormLink';
import useControlledInput from '../../hooks/useControlledInput';
import useLogin from '../../hooks/useLogin';
import useCloseModal from '../../hooks/useCloseModal';


const LoginForm = () => {
  const [email, updateEmail] = useControlledInput('');
  const [password, updatePassword] = useControlledInput('');
  const login = useLogin();
  const closeModal = useCloseModal();

  let isFormReady = true;
  for (let field of [email, password]) {
    if (!field.length) isFormReady = false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    closeModal();
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
      <AuthFormContinueButton type='submit' disabled={!isFormReady}>
        Continue
      </AuthFormContinueButton>
      <DemoUserButton />
      <SignUpFormLink />
    </AuthFormContainer>
  )
};

export default LoginForm;