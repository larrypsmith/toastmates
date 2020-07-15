import React from 'react';
import Footer from './Footer';
import Hero from './Hero';
import Navigation from '../common/Navigation';
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
      <Footer />
    </StyledSplashPage>
  )
};

export default SplashPage;