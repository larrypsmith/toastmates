import styled from 'styled-components/macro'
import React from 'react';
import AuthForm from './AuthForm';
import Container from './Container';
import ExitModalButton from './ExitModalButton';
import NavigationButton from './NavigationButton';

import useQueryModal from '../../hooks/useQueryModal';

const AuthModalContent = () => {
  const modalType = useQueryModal();
  
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
  switch (modalType) {
    case 'login':
      content = authContent.login;  
      break;
    case 'signup':
      content = authContent.signup;
      break;
    default:
      content = null;
      break;
  };

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
        <AuthForm />
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
  letter-spacing: -0.5px;
  font-weight: 600;
  line-height: normal;
  text-align: center;
`;

const StyledNavigationButton = styled(NavigationButton)`
  position: absolute;
  top: 16px;
  right: 16px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const AuthFormContainer = styled(Container)`
  @media screen and (max-width: 1059px) {
    overflow-y: visible;
    padding-left: 42px;
    padding-right: 42px;
    max-width: 420px;
    min-width: 310px;
    margin: 0px auto;
  }

  @media screen and (min-width: 1060px) {
    max-width: initial;
    margin: initial;
    padding-bottom: 30px;
  }
`;