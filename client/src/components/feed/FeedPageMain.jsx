import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import Typography from '../common/Typography';

const FeedPageMain = () => {
  // const [isMobileWidth, setIsMobileWidth] = useState(window.innerWidth < 768);

  return (
    <MainParent>
      <MainContainer>
        <MainContentMargins>
          <MobileDeliveryAddressBar />
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

const MobileDeliveryAddressBar = ({ isHidden }) => {
  if (isHidden) return null;
  return (
    <div>
      <StyledMobileDeliveryAddressBar>
        <TextContainer>
          <div>Delivery to</div>
          <AddressTypography>3601 Lyon St</AddressTypography>
        </TextContainer>
      </StyledMobileDeliveryAddressBar>
    </div>
  );
}

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