import React from 'react';
import styled from 'styled-components/macro';
import { useQuery, gql } from '@apollo/client';
import DesktopDeliveryAddressBar from './DesktopDeliveryAddressBar';
import MerchantList from './MerchantList';
import MobileDeliveryAddressBar from './MobileDeliveryAddressBar';
import useResponsiveWindowWidth from '../../hooks/useResponsiveWindowWidth';

const GET_ALL_MERCHANTS = gql`
  query allMerchants {
    allMerchants {
      id
      name
      imgUrl
    }
  }
`;

const FeedPageMain = () => {
  const windowWidth = useResponsiveWindowWidth();
  const { loading, error, data } = useQuery(GET_ALL_MERCHANTS);

  return (
    <MainParent>
      <DesktopDeliveryAddressBar isHidden={windowWidth < 768} />
      <MainContainer>
        <MainContentMargins>
          <MobileDeliveryAddressBar
            isHidden={windowWidth >= 768}
          />
          <MerchantList title='Nearby' merchants={data && data.allMerchants} />
        </MainContentMargins>
      </MainContainer>
    </MainParent>
  );
};

export default FeedPageMain;

const MainParent = styled.div`
  position: relative;
  background-color: rgb(255, 255, 255);
  z-index: 200;
  margin-top: 248px;
  transition: transform 100ms ease-in-out 0s;

  @media screen and (min-width: 1060px) {
    margin-top: 308px;
  }
`;

const MainContainer = styled.main`
  padding-left: 16px;
  padding-right: 16px;
  max-width: 1024px;
  box-sizing: content-box;
  margin: 0px auto;

  @media screen and (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media screen and (min-width: 1060px) {
    padding-top: 29px;
    padding-left: 36px;
    padding-right: 36px;
  }
`;

const MainContentMargins = styled.div`
  margin-bottom: 80px;

  @media screen and (max-width: 1059px) and (min-width: 768px) {
    margin-top: 16px;
  }

  @media screen and (min-width: 1060px) {
    margin-top: 29px;
  }
`;