import React from 'react';
import styled from 'styled-components/macro';
import useResponsiveWindowWidth from '../../hooks/useResponsiveWindowWidth.js';
import { cartVar } from '../../cache';
import DesktopDeliveryAddressBar from '../common/DesktopDeliveryAddressBar';
import MerchantDetails from './MerchantDetails';
import MobileMerchantActionBar from './MobileMerchantActionBar';
import ViewOrderButton from './ViewOrderButton';

const MerchantPageContent = ({ merchant }) => {
  return (
    <StyledMerchantPageContent>
      <ResponsiveComponents merchant={merchant} />
      <MerchantDetails merchant={merchant} />
    </StyledMerchantPageContent>
  );
};

export default MerchantPageContent;

const ResponsiveComponents = ({ merchant }) => {
  const windowWidth = useResponsiveWindowWidth();
  
  if (windowWidth <= 768) {
    return (
      <React.Fragment>
        <MobileMerchantActionBar address={merchant.address} />
        <GutterBottom />
        <ViewOrderButton numItemsInCart={cartVar().length} />
      </React.Fragment>
    );
  } else {
    return (
      <DesktopDeliveryAddressBar />
    );
  }
}

const StyledMerchantPageContent = styled.div`
  position: relative;
  background-color: #fff;
  margin-top: 130px;

  @media screen and (min-width: 1060px) {
    margin-top: 260px;
  }
`;



const StyledGutterBottom = styled.div`
  height: 8px;
  background-color: rgb(247, 247, 248);
`;

const GutterBottom = () => {
  return (
    <StyledGutterBottom />
  )
};