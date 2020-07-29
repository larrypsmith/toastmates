import React from 'react';
import styled from 'styled-components/macro';
import NavigationButton from './NavigationButton';
import useQueryIsLoggedIn from '../../hooks/useQueryIsLoggedIn';
import { modalVar } from '../../cache';


const LogInButton = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    modalVar('login');
  }
  
  return (
    <NavigationButton onClick={handleClick} {...props}>
      Log In
    </NavigationButton>
  )
};

// const StyledLoginButton = styled(NavigationButton)`
//   transition: background-color 0.1s ease-in-out;
  
//   &:hover {
//     background-color: rgba(0, 0, 0, 0.03);
//   }
// `;

export default LogInButton;