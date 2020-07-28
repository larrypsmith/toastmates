import React from 'react';
import styled from 'styled-components/macro';
import MerchantDeliveryDetails from './MerchantDeliveryDetails';
import MerchantName from './MerchantName';

const MerchantListItemContent = ({ name, deliveryFee, deliveryTime }) => (
  <StyledMerchantListItemContent>
    <MerchantName name={name} />
    <MerchantDeliveryDetails
      deliveryFee={deliveryFee}
      deliveryTime={deliveryTime}
    />
  </StyledMerchantListItemContent>
);

export default MerchantListItemContent;

const StyledMerchantListItemContent = styled.div`
  position: relative;
  padding-top: 16px;
`;