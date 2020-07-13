import React from 'react';
import styled from 'styled-components/macro';
import SplashPageMainSection from './SplashPageMainSection';
import takeoutBoxes from '../../images/takeout-boxes.png';
import itemsGrid from '../../images/items-grid.PNG';

const SplashPageMain = () => (
  <StyledSplashPageMain>
    <SplashPageMainSection
      headerText="Order from local favorites near you."
      paragraphText="
        Whatever you want, we get it.
        Order delivery for yourself or with friends
        and watch in real-time
        as your Postmate brings you all the things you love.
      "
      imgSrc={takeoutBoxes}
    />
    <SplashPageMainSection
      headerText="We deliver more than dinner."
      paragraphText="
        Need another charger?
        Kitchen staples?
        Party supplies?
        We’ve got everything you need
        available for delivery within an hour.
      "
      imgSrc={itemsGrid}
    />
  </StyledSplashPageMain>
);

const StyledSplashPageMain = styled.main`
  max-width: 1024px;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
  box-sizing: content-box;
`;

export default SplashPageMain;