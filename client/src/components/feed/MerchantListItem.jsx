import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import MerchantListItemImage from './MerchantListItemImage';
import MerchantListItemContent from './MerchantListItemContent';

const MerchantListItem = ({ merchant }) => {
  if (!merchant) return null;
  return (
  <StyledMerchantListItem>
    <StyledLink to={`/merchant/${merchant.id}`}>
      <MerchantListItemImage url={merchant.imgUrl} />
      <MerchantListItemContent
        name={merchant.name}
        deliveryFee={merchant.deliveryFee}
        deliveryTime={merchant.deliveryTime}
      />
    </StyledLink>
  </StyledMerchantListItem>
);
}

export default MerchantListItem;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledMerchantListItem = styled.div`
  position: relative;
  flex-shrink: 1;

  &:first-child {
    margin-left: 0;
  }

  @media screen and (max-width: 767px) {
    margin-top: 16px;
    margin-bottom: 16px;
    flex: 1 1 100%;
  }

  @media screen and (max-width: 1059px) and (min-width: 768px) {
    margin-top: 24px;
    margin-left: 24px;
    flex: 0 1 calc(50% - 12px);
    
    &:nth-of-type(2n + 1) {
      margin-left: 0;
    }
  }

  @media screen and (min-width: 1060px) {
    margin-top: 36px;
    margin-left: 36px;
    flex: 0 1 calc(33.33333333333333% - 24px);

    &:nth-of-type(3n + 1) {
      margin-left: 0;
    }
  }
`;

