import React from 'react';
import styled from 'styled-components/macro';
import Typography from '../common/Typography';

const MobileDeliveryAddressBar = ({ isHidden, hidden, ...props }) => {
  if (isHidden) return null;
  return (
    <div {...props}>
      <StyledMobileDeliveryAddressBar>
        <TextContainer>
          <div>Delivery to</div>
          <AddressTypography>3601 Lyon St</AddressTypography>
        </TextContainer>
      </StyledMobileDeliveryAddressBar>
    </div>
  );
}

export default MobileDeliveryAddressBar;

const StyledMobileDeliveryAddressBar = styled.div`
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;
  letter-spacing: 0.8px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  color: rgb(0, 204, 153);
  width: 100%;
  height: initial;
  text-align: left;
  margin: 0px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  transition: background-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s;
  border-radius: 0px;
  padding: 20px 0px;
`;

const TextContainer = styled.div`
  font-size: 100%;
  font-weight: inherit;
  margin: 0px;
`;

const AddressTypography = styled(Typography)`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  line-height: normal;
  color: rgba(0, 0, 0, 0.3);
  letter-spacing: -1.2px;
  text-transform: none;
  margin-top: 11px;
`;