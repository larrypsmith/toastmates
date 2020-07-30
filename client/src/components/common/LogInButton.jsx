import React from 'react';
import NavigationButton from './NavigationButton';
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

export default LogInButton;