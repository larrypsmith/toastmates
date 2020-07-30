import React from 'react';
import NavigationButton from './NavigationButton';
import { modalVar } from '../../cache';
import LoginModal from '../common/LogInModal';

const LogInButton = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    modalVar(LoginModal);
    debugger
  }
  
  return (
    <NavigationButton onClick={handleClick} {...props}>
      Log In
    </NavigationButton>
  )
};

export default LogInButton;