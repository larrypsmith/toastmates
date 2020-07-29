import styled from 'styled-components/macro'
import React from 'react';
import Container from './Container';
import ExitModalButton from './ExitModalButton';
import LoginForm from './LoginForm';
import NavigationButton from './NavigationButton';
import SignUpForm from './SignUpForm';

const AuthModalContent = ({ modalType }) => {
  const authContent = {
    login: {
      headerText: 'Log In',
      alternateModal: 'signup',
      alternateButtonText: 'Sign Up'
    },
    signup: {
      headerText: 'Sign Up',
      alternateModal: 'login',
      alternateButtonText: 'Log In'
    }
  };

  let content;
  let Form;
  switch (modalType) {
    case 'login':
      content = authContent.login;  
      Form = LoginForm;
      break;
    case 'signup':
      content = authContent.signup;
      Form = SignUpForm; 
      break;
    default:
      content = null;
      break;
  };

  if (!modalType) return null;
  return (
    <div>
      <HeaderContainer>
        <Header>{content.headerText}</Header>
        <ExitModalButton />
        <StyledNavigationButton modal={content.alternateModal}>
          {content.alternateButtonText}
        </StyledNavigationButton>
      </HeaderContainer>
      <AuthFormContainer>
        <Form />
      </AuthFormContainer>
    </div>
  )
};

export default AuthModalContent;

const HeaderContainer = styled(Container)`
  padding-top: 71px;
  padding-bottom: 34px;
  padding-left: 42px;
  padding-right: 42px;
`;

const Header = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: normal;
  text-align: center;
`;

const StyledNavigationButton = styled(NavigationButton)`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const AuthFormContainer = styled(Container)`
  box-sizing: border-box;

  @media screen and (max-width: 1059px) {
    overflow-y: visible;
    padding-left: 42px;
    padding-right: 42px;
    max-width: 420px;
    min-width: 310px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1060px) {
    max-width: initial;
    margin: initial;
    padding-bottom: 30px;
  }
`;