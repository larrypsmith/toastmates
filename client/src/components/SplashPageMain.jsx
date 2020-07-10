import React from 'react';
import styled from 'styled-components/macro';
import takeoutBoxes from '../images/takeout-boxes.png';

const StyledSplashPageMain = styled.main`
  width: 100vw;
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
    </StyledSplashPageMain>
  );
};

export default SplashPageMain;