import React from 'react';
import styled from 'styled-components/macro';
import Button from './Button';
import Typography from './Typography';
import useQueryModal from '../../hooks/useQueryModal'; 
import useControlledInput from '../../hooks/useControlledInput';

const AuthForm = () => {
  const modalType = useQueryModal();
  const [email, updateEmail] = useControlledInput('');
  const [password, updatePassword] = useControlledInput('');

  const isReadyToContinue = (email.length > 0 && password.length > 0);

  // let authFormContent;
  // switch (modalType) {
  //   case 'login':
      
  //     break;
  
  //   default:
  //     break;
  // }

  return (
    <StyledAuthForm>
      <StyledInstructions weight={400} size='18px'>
        Enter your email and password
      </StyledInstructions>
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
      <StyledButton type='submit' disabled={!isReadyToContinue}>
        Continue
      </StyledButton>
    </StyledAuthForm>
  )
};

export default AuthForm;

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
  caret-color: rgb(0, 0, 0);
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