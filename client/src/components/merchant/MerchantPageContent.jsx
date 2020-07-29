import React from 'react';
import styled from 'styled-components/macro';
import useResponsiveWindowWidth from '../../hooks/useResponsiveWindowWidth.js';
import { cartVar } from '../../cache';
import DesktopDeliveryAddressBar from '../feed/DesktopDeliveryAddressBar';

const MerchantPageContent = ({ merchant }) => {
  const windowWidth = useResponsiveWindowWidth();
  
  if (windowWidth <= 768) {
    return (
      <StyledMerchantPageContent>
        <MobileMerchantActionBar address={merchant.address} />
        <GutterBottom />
        <ViewOrderButton numItemsInCart={cartVar().length} />
      </StyledMerchantPageContent>
    );
  } else {
    return (
      <StyledMerchantPageContent>
        <DesktopDeliveryAddressBar />
      </StyledMerchantPageContent>
    );
  }
};

export default MerchantPageContent;

const StyledMerchantPageContent = styled.div`
  position: relative;
  background-color: #fff;
  margin-top: 130px;

  @media screen and (min-width: 1060px) {
    margin-top: 260px;
  }
`;

const MobileMerchantActionBar = ({ address, ...props }) => {
  return (
    <StyledMobileMerchantActionBar {...props}>
      <StyledDeliveryTime>
        <span>Delivery</span>
        <StyledSVG width='11' height='12'>
          <path
            d='M5.5 5.589h2.357v.798H4.714V1.996H5.5v3.593zM5.5 0A5.5 5.5 0 0111 5.5v.177a5.5 5.5 0 01-11 0V5.5A5.5 5.5 0 015.5 0zm0 .798A4.714 4.714 0 00.786 5.513v.152a4.714 4.714 0 109.428 0v-.152A4.714 4.714 0 005.5.798z'
            fill='#8F95A3'
            fillRule='evenodd'
          />
        </StyledSVG>
        <span>ASAP</span>
      </StyledDeliveryTime>
      <StyledDeliveryAddress>
        3601 Lyon St, San Francisco, CA
      </StyledDeliveryAddress>
    </StyledMobileMerchantActionBar>
  );
};

const StyledMobileMerchantActionBar = styled.div`
  cursor: pointer;
  padding: 16px;
`;

const StyledDeliveryTime = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: rgb(143, 149, 163);
  display: flex;
  align-items: center;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const StyledSVG = styled.svg`
  margin: 0px 4px;
`;

const StyledDeliveryAddress = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.4)
`;

const StyledGutterBottom = styled.div`
  height: 8px;
  background-color: rgb(247, 247, 248);
`;

const GutterBottom = () => {
  return (
    <StyledGutterBottom />
  )
}

const ViewOrderButton = ({ numItemsInCart }) => {
  if (numItemsInCart === 0) return null;
  return (
    <Container>
      <StyledButtonContainer>
        <StyledButton>
          <CartItemCount>
            {numItemsInCart}
          </CartItemCount>
          <ViewOrderText>
            View Order
          </ViewOrderText>
          <CartItemCount />
        </StyledButton>
      </StyledButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const StyledButtonContainer = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  z-index: 300;
  opacity: 1;
  visibility: visible;

  @media screen and (max-width: 1059px) {
    width: calc(100% - 32px);
    margin: 16px 16px 36px;
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  text-align: center;
  height: 56px;
  background-color: rgb(0, 204, 153);
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  transition: background-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s;
  border-radius: 28px;
  padding: 0px 20px;
`;

const CartItemCount = styled.span`
  font-size: 13px;
  letter-spacing: 0.8px;
  font-weight: 600;
  text-transform: uppercase;
  color: rgb(255, 255, 255);
  text-align: left;
  flex: 1 1 0%;
`;

const ViewOrderText = styled.span`
  text-align: center;
  flex: 1 1 0%;
`;