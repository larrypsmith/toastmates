import React from 'react';
import NavigationButton from './NavigationButton';
import { modalVar } from '../../cache';
import SignUpModal from '../common/SignUpModal';
import useQueryIsLoggedIn from '../../hooks/useQueryIsLoggedIn';

const SignUpButton = (props) => {
  const isLoggedIn = useQueryIsLoggedIn();
  
  const handleClick = (e) => {
    e.preventDefault();
    modalVar(SignUpModal);
  };
  
  if (isLoggedIn) return null;
  return (
    <NavigationButton onClick={handleClick} {...props}>
      Sign Up
    </NavigationButton>  
  )
}

export default SignUpButton;