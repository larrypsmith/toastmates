import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import SplashPageMain from './SplashPageMain';
import styled from 'styled-components/macro';

const StyledSplashPage = styled.div`
  min-height: 100vh;
  height: 100%;
`;

function SplashPage() {
  return (
    <StyledSplashPage>
      <Navigation />
      <Hero />
      <SplashPageMain />
    </StyledSplashPage>
  )
};

export default SplashPage;