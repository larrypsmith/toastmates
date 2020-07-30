import React from 'react';
import NavigationButton from './NavigationButton';
import { modalVar } from '../../cache';
import SignUpModal from '../common/SignUpModal';

const SignUpButton = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    modalVar(SignUpModal);
  };
  
  return (
    <NavigationButton onClick={handleClick} {...props}>
      Sign Up
    </NavigationButton>  
  )
}

export default SignUpButton;