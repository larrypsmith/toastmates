import React from 'react';
import styled from 'styled-components/macro';
import useQueryIsLoggedIn from '../../hooks/useQueryIsLoggedIn';
import { modalVar } from '../../cache';
import LoginModal from '../common/LogInModal';

const CheckoutButton = () => {
  const isLoggedIn = useQueryIsLoggedIn();
  
  const handleClick = (e) => {
    e.stopPropagation();

    if (!isLoggedIn) {
      modalVar(LoginModal);
    } 
  }
  
  return (
    <StyledCheckoutButton onClick={handleClick}>
      <StyledSpan>
        Checkout
      </StyledSpan>
    </StyledCheckoutButton>
  )
};

export default CheckoutButton;

const StyledCheckoutButton = styled.button`
  appearance: none;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
  height: 56px;
  background-color: rgb(0, 204, 153);
  color: rgb(255, 255, 255);
  position: fixed;
  bottom: 0px;
  left: 0px;
  /* width: 100%; */
  width: calc(100% - 32px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 400;
  padding: 0px;
  margin: 0px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  transition: background-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s;
  border-radius: 28px;

  @media screen and (max-width: 1059px) {
    /* width: calc(100% - 32px); */
    margin: 16px 16px 36px;
  }

  @media screen and (min-width: 1060px) {
    position: static;
    /* width: calc(100% - 32px); */
    margin: 0px 16px 16px;
  }
`;

const StyledSpan = styled.span`
  text-align: center;
  flex: 1 1 0%;
`;