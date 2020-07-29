import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components/macro';
import NavigationButton from './NavigationButton';
import useQueryIsLoggedIn from '../../hooks/useQueryIsLoggedIn';
import { modalVar } from '../../cache';

const SignUpButton = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    modalVar('signup');
  };
  
  return (
    <NavigationButton onClick={handleClick} {...props}>
      Sign Up
    </NavigationButton>  
  )
}

export default SignUpButton;

// const StyledNavigationButton = styled(NavigationButton)`
//   color: ${props => props.theme.palette.secondary.main};
//   background-color: ${props => props.theme.palette.common.black};
//   margin-left: 10px;
// `;

// const StyledNavigationButton2 = styled(NavigationButton)`
//   color: ${props => props.theme.palette.common.black};
//   background-color: transparent;
//   margin-left: 10px;
// `;