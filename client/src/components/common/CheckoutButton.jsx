import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import useQueryIsLoggedIn from '../../hooks/useQueryIsLoggedIn';
import LoginModal from './LogInModal';
import { modalVar, redirectVar, hideCartVar } from '../../cache';

const CheckoutButton = () => {
  const isLoggedIn = useQueryIsLoggedIn();
  const history = useHistory();
  
  const handleClick = (e) => {
    e.stopPropagation();

    if (!isLoggedIn) {
      modalVar(LoginModal);
      redirectVar('/checkout');
    } else {
      history.push('/checkout');
    }
    
    hideCartVar(true);
  }
  
  return (
    <StyledCheckoutButton onClick={handleClick}>
      <span>Checkout</span>
    </StyledCheckoutButton>
  );
};

export default CheckoutButton;

const StyledCheckoutButton = styled.button`
  @media screen and (min-width: 768px) {
    right: 20px;
    left: 20px;
    width: calc(100% - 20px - 20px);
  }

  cursor: pointer;
  padding: 0;
  margin: 0;
  appearance: none;
  border: none;
  outline: none;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;
  cursor: pointer;
  text-align: center;
  height: 56px;
  transition: background-color 0.2s ease-in-out,color 0.2s ease-in-out;
  border-radius: 0;
  background-color: #00CC99;
  color: #fff;
  border-radius: 32px;
  height: 48px;
  position: absolute;
  width: 100%;
  top: 0;
`;