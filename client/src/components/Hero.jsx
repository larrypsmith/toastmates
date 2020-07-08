import styled from 'styled-components/macro';
import React, { useState, useEffect } from 'react';
import BackgroundImage from './BackgroundImage';
import Container from './Container';
import FlexContainer from './FlexContainer';
import OrderNowButton from './OrderNowButton';
import Typography from './Typography';
import food from '../images/hero-food.png';
import table from '../images/hero-table.png';

const StyledContainer = styled(Container)`
  position: relative;
  z-index: 100;
  box-sizing: border-box;
  height: 528px;

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

  const innerHTML = windowWidth < 768 ? 'You want it. We get it.' : 'Something else.';

  return (
    <StyledContainer>
      <HeroContent flexDirection='column' alignItems='center'>
        <Header>
          {innerHTML}
        </Header>
        <SubHeader>
          Food, drinks, groceries, and more available for delivery and pickup.
        </SubHeader>
        <OrderNowButton />
      </HeroContent>
      <BackgroundImage zIndex={101} url={table} />
      <BackgroundImage zIndex={102} url={food} />
    </StyledContainer>
  )
};

export default Hero;