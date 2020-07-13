import React from 'react';
import styled from 'styled-components/macro';
import Container from '../common/Container';
import ResponsiveImage from '../common/ResponsiveImage';

const StyledSplashPageMainSection = styled.section`
  margin-left: -16px;
  margin-right: -16px;
  background-color: ${({ theme }) => theme.palette.common.white};
  padding-bottom: 16px;

  @media screen and (min-width: 768px) {
    padding-bottom: 0;
    margin-left: -24px;
    margin-right: -24px;
  }

  @media screen and (min-width: 1060px) {
    margin-left: -36px;
    margin-right: -36px;
  }
`;

const StyledVerticalContainer = styled.div`
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

const StyledSplashPageMainSectionContent = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    position: relative;
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1060px) {
    height: 326px;
    justify-content: space-between;
  }
`;

const StyledSplashPageMainSectionContentText = styled.div`
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

const Header = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: -1.7px;
  text-align: center;
  color: ${({ theme }) => theme.palette.common.black};
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 452px;
    text-align: left;
    letter-spacing: -1.7px;
  }

  @media screen and (min-width: 1060px) {
    font-size: 48px;
    line-height: 50px;
    letter-spacing: -2.6px;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  letter-spacing: 0.14px;
  font-weight: 400;
  margin-bottom: 23px;
  margin-top: 8px;
  line-height: 26px;
  color: ${({ theme }) => theme.palette.text.secondary};
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }

  @media screen and (min-width: 1060px) {
    margin-top: 13px;
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

function SplashPageMainSection({ headerText, paragraphText, imgSrc }) {
  return (
    <StyledSplashPageMainSection>
      <Container maxWidth='1024px' padding={[16, 54, 36]}>
        <StyledVerticalContainer>
          <StyledSplashPageMainSectionContent>
            <StyledSplashPageMainSectionContentText>
              <Header>
                {headerText}
              </Header>
              <Paragraph>
                {paragraphText}
              </Paragraph>
              <OrderNowButton>Order Now</OrderNowButton>
            </StyledSplashPageMainSectionContentText>
            <ResponsiveImage src={imgSrc} alt="" backgroundPosition='center center' z={1000} />
          </StyledSplashPageMainSectionContent>
        </StyledVerticalContainer>
      </Container>
    </StyledSplashPageMainSection>
  )
};

export default SplashPageMainSection;