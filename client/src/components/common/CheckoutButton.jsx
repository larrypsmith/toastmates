import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const CheckoutButton = ({ merchantId }) => {
  return (
    <Link to={`/merchant/${merchantId}/checkout`}>
      <StyledCheckoutButton>
        <span>Checkout</span>
      </StyledCheckoutButton>
    </Link>
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