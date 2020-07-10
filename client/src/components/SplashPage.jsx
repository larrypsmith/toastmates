import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import SplashPageMain from './SplashPageMain';

function SplashPage() {
  return (
    <React.Fragment>
      <Navigation />
      <Hero />
      <SplashPageMain />
    </React.Fragment>
  )
};

export default SplashPage;