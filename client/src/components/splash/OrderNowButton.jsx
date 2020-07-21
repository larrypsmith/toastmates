import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const StyledOrderNowButton = styled.button`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  height: 48px;
  width: 265px;
  border-radius: 24px;
  border: none;
  color: ${props => props.theme.palette.common.black};
  letter-spacing: .8px;
  background-color: ${props => props.theme.palette.common.white};
  box-shadow: 2px 8px 15px rgba(0,0,0,0.1);
  cursor: pointer;
`;

const OrderNowButton = () => (
  <Link to='/feed'>
    <StyledOrderNowButton>
      Order Now
    </StyledOrderNowButton>
  </Link>
);

export default OrderNowButton;