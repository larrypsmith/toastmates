import styled from 'styled-components/macro'
import React from 'react';
import Container from './Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import SignUpButton from './SignUpButton';

const AuthModalContent = () => {
  return (
    <div>
      <StyledContainer>
        <Header>Log In</Header>
        <ExitButton />
        <StyledSignUpButton />
      </StyledContainer>
    </div>
  )
};

export default AuthModalContent;

const StyledContainer = styled(Container)`
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
  return (
    <ExitButtonContainer>
      <FontAwesomeIcon icon={faTimes} size="lg" />
    </ExitButtonContainer>
  );
}

const StyledSignUpButton = styled(SignUpButton)`
  color: ${props => props.theme.palette.common.black};
  background-color: ${props => props.theme.palette.common.white};
`;