import styled from 'styled-components/macro';
import React from 'react';
import BackgroundImage from './BackgroundImage';
import FlexContainer from './FlexContainer';
import OrderNowButton from './OrderNowButton';
import Typography from './Typography';
import food from '../images/hero-food.png';
import table from '../images/hero-table.png';

const StyledHero = styled.section`
  position: relative;
  z-index: 100;
  box-sizing: border-box;
  height: 528px;
`;

const Header = styled(Typography)`
  display: block;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 9px;
`;

const SubHeader = styled(Typography)`
  display: block;
  font-size: 18px;
  padding-bottom: 26px;
`;

const HeroContent = styled(FlexContainer)`
  position: relative;
  z-index: 103;
  padding-top: 60px;
  align-items: 'center';
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    padding-top: 116px;
  }
`

function Hero() {
  return (
    <StyledHero>
      <HeroContent flexDirection='column'>
        <Header>
          You want it. We get it.
        </Header>
        <SubHeader>
          Food, drinks, groceries, and more available for delivery and pickup.
        </SubHeader>
        <OrderNowButton />
      </HeroContent>
      <BackgroundImage zIndex={101} url={table} />
      <BackgroundImage zIndex={102} url={food} />
    </StyledHero>
  )
};

export default Hero;