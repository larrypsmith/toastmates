import React from 'react';
import styled from 'styled-components/macro';
import Hero from './Hero';
import SplashPageMain from './SplashPageMain';
import SplashNavigation from './SplashNavigation';

const StyledSplashPage = styled.div`
  min-height: 100vh;
  height: 100%;
`;

function SplashPage() {
  return (
    <StyledSplashPage>
      <SplashNavigation />
      <Hero />
      <SplashPageMain />
    </StyledSplashPage>
  )
};

export default SplashPage;