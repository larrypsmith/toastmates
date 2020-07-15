import React from 'react';
import styled from 'styled-components/macro';
import Image from '../common/Image';
import Header from './Header';
import Paragraph from './Paragraph';
import Container from '../common/Container';
import SplashPageMainSection from './SplashPageMainSection';
import takeoutBoxes from '../../images/takeout-boxes.png';

const LocalFavoritesSection = () => (
  <SplashPageMainSection>
    <Container maxWidth='1024px' padding={[16, 54, 36]}>
      <VerticalContainer>
        <SplashPageMainSectionContent>
          <SplashPageMainSectionContentText>
            <Header>
              Order from local favorites near you.
            </Header>
            <Paragraph>
              Need another charger?
              Kitchen staples?
              Party supplies?
              We’ve got everything you need
              available for delivery within an hour.
            </Paragraph>
            <OrderNowButton>Order Now</OrderNowButton>
          </SplashPageMainSectionContentText>
          <ResponsiveImage src={takeoutBoxes} alt="" backgroundPosition='center center' z={1000} />
        </SplashPageMainSectionContent>
      </VerticalContainer>
    </Container>
  </SplashPageMainSection>
);

const VerticalContainer = styled.div`
  padding: 25px 0px 40px 0px;

  @media screen and (min-width: 768px) {
    padding-top: 75px;
    padding-bottom: 15px;
  }

  @media screen and (min-width: 1060px) {
    padding-top: 115px;
    padding-bottom: 135px;
  }
`;

const SplashPageMainSectionContent = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;

  @media screen and (min-width: 768px) {
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    justify-content: space-around;
    position: relative;
    display: flex;
  }

  @media screen and (min-width: 1060px) {
    height: 326px;
    justify-content: space-between;
  }
`;

const SplashPageMainSectionContentText = styled.div`
  width: 100%;
  padding-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding-top: 0;
    align-items: flex-start;
    max-width: 300px;
  }

  @media screen and (min-width: 1060px) {
    max-width: 452px;
  }
`;

const OrderNowButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;
  cursor: pointer;
  text-align: center;
  transition-property: background-color, color;
  transition-duration: 0.2s, 0.2s;
  transition-timing-function: ease-in, ease-out;
  transition-delay: 0s 0s;
  border-radius: 28px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.common.white};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 265px;
  height: 48px; 
  letter-spacing: 0.8px;

  @media screen and (min-width: 768px) {
    width: 165px;
  }
`;

const StyledResponsiveImage = styled.div`
  position: relative;
  background-color: transparent;
  width: calc(100% + 32px);
  overflow: hidden;

  @media screen and (min-width: 768px) {
    margin-right: -20px;
    margin-top: -80px;
    max-width: 360px;
  }

  @media screen and (min-width: 1060px) {
    margin-right: -40px;
    max-width: none;
    width: 600px;
    height: auto;
  }
`;

const Img = styled.img`
  display: none;
`;

const PaddingDiv = styled.div`
  height: auto;
  padding-bottom: 67%;
`;

const ResponsiveImage = ({ src, alt, backgroundPosition, z }) => (
  <StyledResponsiveImage>
    <div>
      <Img src={src} alt={alt} />
      <Image
        src={src}
        backgroundPosition={backgroundPosition}
        z={z}
      />
    </div>
    <PaddingDiv />
  </StyledResponsiveImage>
);

export default LocalFavoritesSection;