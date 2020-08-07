import React from 'react';
import NavigationButton from './NavigationButton';
import { modalVar } from '../../cache';
import LoginModal from '../common/LogInModal';
import useQueryIsLoggedIn from '../../hooks/useQueryIsLoggedIn';

const LogInButton = (props) => {
  const isLoggedIn = useQueryIsLoggedIn();
  
  const handleClick = (e) => {
    e.preventDefault();
    modalVar(LoginModal);
  }
  
  if (isLoggedIn) return null;
  return (
    <NavigationButton onClick={handleClick} {...props}>
      Log In
    </NavigationButton>
  )
};

export default LogInButton;