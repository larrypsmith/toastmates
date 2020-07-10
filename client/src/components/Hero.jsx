import styled from 'styled-components/macro';
import React, { useState, useEffect } from 'react';
import Container from './Container';
import FlexContainer from './FlexContainer';
import FoodBackgroundImage from './FoodBackgroundImage';
import OrderNowButton from './OrderNowButton';
import TableBackgroundImage from './TableBackgroundImage';
import Typography from './Typography';

const StyledHero = styled.header`
  position: relative;
  height: 528px;

  @media screen and (min-width: 1060px) {
    height: 608px;
  }
`;

const StyledContainer = styled(Container)`
  position: relative;
  box-sizing: border-box;

  @media screen and (max-width: 767px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Header = styled(Typography)`
  display: block;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 9px;
  text-align: center;
`;

const SubHeader = styled(Typography)`
  font-size: 18px;
  padding-bottom: 26px;
  text-align: center;
`;

const HeroContent = styled(FlexContainer)`
  position: relative;
  z-index: 103;
  padding-top: 60px;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    padding-top: 116px;
  }
`

function Hero() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const headerText = windowWidth < 768 ? 'You want it. We get it.' : 'Something else.';

  return (
    <StyledHero>
      <StyledContainer>
        <Container maxWidth='1024px'>
          <HeroContent flexDirection='column' alignItems='center'>
            <Header>
              {headerText}
            </Header>
            <SubHeader>
              Food, drinks, groceries, and more available for delivery and pickup.
            </SubHeader>
            <OrderNowButton />
          </HeroContent>
        </Container>
      </StyledContainer>
      <TableBackgroundImage />
      <FoodBackgroundImage />
    </StyledHero>
  )
};

export default Hero;