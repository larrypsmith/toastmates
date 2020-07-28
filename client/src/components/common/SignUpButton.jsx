import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components/macro';
import NavigationButton from './NavigationButton';
import useQueryIsLoggedIn from '../../hooks/useQueryIsLoggedIn';

const SignUpButton = () => {
  const isLoggedIn = useQueryIsLoggedIn();

  if (isLoggedIn) return null;
  return (
    <Switch>
      <Route path='/merchant/:id'>
        <StyledNavigationButton2 modal='signup'>
          Sign Up
        </StyledNavigationButton2>
      </Route>
      <Route path='/'>
        <StyledNavigationButton modal="signup">
          Sign Up
        </StyledNavigationButton>
      </Route>
    </Switch>
    
  )
};

export default SignUpButton;

const StyledNavigationButton = styled(NavigationButton)`
  color: ${props => props.theme.palette.secondary.main};
  background-color: ${props => props.theme.palette.common.black};
  margin-left: 10px;
`;

const StyledNavigationButton2 = styled(NavigationButton)`
  color: ${props => props.theme.palette.common.black};
  background-color: transparent;
  margin-left: 10px;
`;