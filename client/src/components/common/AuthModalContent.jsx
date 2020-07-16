import styled from 'styled-components/macro'
import React from 'react';
import Container from './Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import NavigationButton from './NavigationButton';
import useCloseModal from '../../hooks/useCloseModal';
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
        <ExitButton />
        <StyledNavigationButton modal={content.alternateModal}>
          {content.alternateButtonText}
        </StyledNavigationButton>
      </HeaderContainer>
      <AuthFormContainer>
        {/* <AuthForm /> */}
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

const ExitButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 16px;
  display: flex;
  height: 24px;
  width: 24px;
  margin-right: 14px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 28px;
    left: initial;
    right: 12px;
  }
`;

const ExitButton = () => {
  const closeModal = useCloseModal();

  return (
    <ExitButtonContainer onClick={closeModal}>
      <FontAwesomeIcon icon={faTimes} size="lg" />
    </ExitButtonContainer>
  );
}

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