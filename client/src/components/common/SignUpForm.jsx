import React from 'react';
import styled from 'styled-components/macro';
import Button from './Button';
import Flex from './Flex';
import Typography from './Typography';
import useControlledInput from '../../hooks/useControlledInput';
import useLogin from '../../hooks/useLogin';
import useRegister from '../../hooks/useRegister';


const SignUpForm = () => {
  const [email, updateEmail] = useControlledInput('');
  const [password, updatePassword] = useControlledInput('');
  const [firstName, updateFirstName] = useControlledInput('');
  const [lastName, updateLastName] = useControlledInput('');
  const register = useRegister();
  const login = useLogin();

  let isFormReady = true;
  for (let field of [email, password, firstName, lastName]) {
    if (!field.length) isFormReady = false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password, firstName, lastName);
  };

  const handleSubmitDemo = (e) => {
    e.preventDefault();
    login('johndoe@mail.com', 'password')
  }

  return (
    <StyledAuthForm onSubmit={handleSubmit}>
      <StyledInstructions weight={400} size='18px'>
        Enter your name, email, and password
      </StyledInstructions>
      <Flex
        parent
        direction={['column', 'row']}
        justify="space-between"
      >
        <Input
          placeholder="First Name"
          value={firstName}
          onChange={updateFirstName}
          />
        <Input
          placeholder="Last Name"
          value={lastName}
          onChange={updateLastName}
          
        />
      </Flex>
      <Input
        placeholder="Email"
        value={email}
        onChange={updateEmail}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={updatePassword}
      />
      <StyledButton type='submit' disabled={!isFormReady}>
        Continue
      </StyledButton>
      <StyledOutlineButton type='button' onClick={handleSubmitDemo}>
        Log in as demo user
      </StyledOutlineButton>
    </StyledAuthForm>
  )
};

export default SignUpForm;

const StyledAuthForm = styled.form`
  width: 100%;
  padding-bottom: 91px;
`;

const StyledInstructions = styled(Typography)`
  padding-bottom: 40px;
  text-align: center;
  color: ${props => props.theme.palette.text.primary};
`;

const Input = styled.input`
  font-size: 16px;
  letter-spacing: 0.14px;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  color: rgb(45, 49, 56);
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
  box-shadow: none !important;
  border-radius: 0px;
  border-bottom: 1px solid rgb(217, 219, 224);
  padding: 22px 0px;

  &:focus-within {
    padding-bottom: 21px;
    border-bottom: ${props => '2px solid ' + props.theme.palette.primary.main} 
  }

  @media screen and (min-width: 1060px) {
    max-width: 335px;
    margin-left: 14px;
    margin-right: 14px;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 30px;
`;

const StyledOutlineButton = styled(StyledButton)`
  color: ${props => props.theme.palette.primary.main};
  background-color: transparent;
  border: ${props => '1px solid ' + props.theme.palette.primary.main};

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;