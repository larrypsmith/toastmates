import React from 'react';
import NavigationButton from './NavigationButton';
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