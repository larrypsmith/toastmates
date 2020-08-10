import React from 'react';
import styled from 'styled-components/macro';
import Navigation from '../common/Navigation';

const CheckoutNavigation = () => (
  <Navigation container={StyledCheckoutNavigation} hideCart />
);

export default CheckoutNavigation;

const StyledCheckoutNavigation = styled.header`
  @media screen and (max-width: 767px) {
    padding-left: 25px;
    padding-right: 25px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media screen and (min-width: 1060px) {
    padding-left: 36px;
    padding-right: 36px;
  }

  padding-left: 16px;
  padding-right: 16px;
  right: 0px;
  left: 0px;
  z-index: 400;
  background-color: rgb(255, 255, 255);
  transition: background-color 0.2s ease-in-out 0s;
  border-bottom: 1px solid rgb(236, 237, 239);
`;