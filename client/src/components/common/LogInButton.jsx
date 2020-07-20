import React from 'react';
import styled from 'styled-components/macro';
import NavigationButton from './NavigationButton';
import useQueryIsLoggedIn from '../../hooks/useQueryIsLoggedIn';


const LogInButton = () => {
  const isLoggedIn = useQueryIsLoggedIn();

  if (isLoggedIn) return null;
  return (
    <StyledLoginButton modal='login'>
      Log In
    </StyledLoginButton>
  )
};

const StyledLoginButton = styled(NavigationButton)`
  transition: background-color 0.1s ease-in-out;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

export default LogInButton;