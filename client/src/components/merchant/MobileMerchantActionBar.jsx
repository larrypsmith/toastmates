import React from 'react';
import styled from 'styled-components/macro';

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

export default MobileMerchantActionBar;

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