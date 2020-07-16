import React from 'react';
import styled from 'styled-components/macro';
import NavigationButton from './NavigationButton';

const LogInButton = () => (
  <StyledLoginButton modal='login'>
    Log In
  </StyledLoginButton>
);

const StyledLoginButton = styled(NavigationButton)`
  transition: background-color 0.1s ease-in-out;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

export default LogInButton;