import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import RotatingWord from './RotatingWord';

function SplashPage() {
  return (
    <React.Fragment>
      <Navigation />
      <Hero />
      <RotatingWord />
    </React.Fragment>
  )
};

export default SplashPage;