import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import RotatingWord from './RotatingWord';
import WordCarousel from './WordCarousel';

function SplashPage() {
  return (
    <React.Fragment>
      <Navigation />
      <Hero />
      {/* <RotatingWord /> */}
      <WordCarousel />
    </React.Fragment>
  )
};

export default SplashPage;