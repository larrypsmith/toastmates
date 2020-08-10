import React from 'react';
import styled from 'styled-components/macro';
import CheckoutMainContent from './CheckoutMainContent';
import Typography from '../common/Typography';

const CheckoutMain = () => (
  <StyledCheckoutMain>
    <StyledTypography size='36px' weight='600'>Checkout</StyledTypography>
    <CheckoutMainContent />
  </StyledCheckoutMain>
);

export default CheckoutMain;

const StyledCheckoutMain = styled.main`
  @media screen and (max-width: 1059px) {
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 25px;
  }

  @media screen and (min-width: 1060px) {
    padding-left: 36px;
    padding-right: 36px;
  }

  padding-left: 16px;
  padding-right: 16px;
  max-width: 1024px;
  box-sizing: content-box;
  padding-bottom: 100px;
  margin: 30px auto 0px;
`;

const StyledTypography = styled(Typography)`
  margin: 0.67em 0px;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (min-width: 1060px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;