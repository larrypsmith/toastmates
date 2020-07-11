import React from 'react';
import styled from 'styled-components/macro';
import SplashPageMainSection from './SplashPageMainSection';

const StyledSplashPageMain = styled.main`
  max-width: 1024px;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
  box-sizing: content-box;
`;

const Image = styled.div`
  width: 100%;
  height: 337px;
  background-image: url(${props => props.url});
  background-size: contain;
  background-repeat: no-repeat;
`;

function SplashPageMain() {
  return (
    <StyledSplashPageMain>
      <SplashPageMainSection />
    </StyledSplashPageMain>
  );
};

export default SplashPageMain;