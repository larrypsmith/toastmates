import React from 'react';
import styled from 'styled-components/macro'
import food from '../../images/feed-page-header-food.png';

const FeedPageHeader = () => (
  <StyledFeedPageHeader>
    <Container>
      <BackgroundImageContainer>
        <div>
          <img
            style={{display: 'none'}}
            src={food}
            alt=""
          />
          <BackgroundImageDiv />
        </div>
      </BackgroundImageContainer>
    </Container>
  </StyledFeedPageHeader>
);

export default FeedPageHeader;

const StyledFeedPageHeader = styled.div`
  position: fixed;
  width: 100%;
  background-color: #FED928;
  height: 248px;

  @media screen and (min-width: 1060px) {
    height: 308px;
  }
`;

const Container = styled.div`
  max-width: 1024px;
  height: 100%;
  width: 100%;
  position: relative;
  margin: 0 auto;
`;

const BackgroundImageContainer = styled.div`
  width: 1600px;
  height: 100%;
  position: absolute;
  left: calc(50% - 800px);
  overflow: hidden;
  background-color: transparent;
`;

const BackgroundImageDiv = styled.div`
  background-image: url(${food});
  opacity: 1;
  position: absolute;
  background-position: center center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.4s linear;
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
`;