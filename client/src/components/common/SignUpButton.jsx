import React from 'react';
import styled from 'styled-components/macro';
import NavigationButton from './NavigationButton';
import useQueryIsLoggedIn from '../../hooks/useQueryIsLoggedIn';

const StyledNavigationButton = styled(NavigationButton)`
  color: ${props => props.theme.palette.secondary.main};
  background-color: ${props => props.theme.palette.common.black};
  margin-left: 10px;
`;

const SignUpButton = () => {
  const isLoggedIn = useQueryIsLoggedIn();

  if (isLoggedIn) return null;
  return (
    <StyledNavigationButton modal="signup">
      Sign Up
    </StyledNavigationButton>
  )
};

export default SignUpButton;