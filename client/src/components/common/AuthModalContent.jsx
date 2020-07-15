import styled from 'styled-components/macro'
import React from 'react';
import Container from './Container';

const AuthModalContent = () => {
  return (
    <div>
      <StyledContainer>
        <Header>Log In</Header>
        <ExitButton />
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
      <i class="fas fa-times"></i>
    </ExitButtonContainer>
  );
}