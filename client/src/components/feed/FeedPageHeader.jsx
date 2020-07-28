import React from 'react';
import styled from 'styled-components/macro'
import Typography from '../common/Typography';
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
      <HeaderTextContainer>
        <HeaderText
          color='black'
          weight={600}
          size='40px'
        >
          You crave.
          <br/>
          We get it.
        </HeaderText>
      </HeaderTextContainer>
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

const HeaderTextContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (min-width: 768px) {
    top: auto;
    bottom: 70px;
    padding-left: 24px;
    padding-right: 24px;
  }

  @media screen and (min-width: 1060px) {
    bottom: 87px;
    padding-left: 0;
    padding-right: 0;
    padding-left: 36px;
    padding-right: 36px;
  }
`;

const HeaderText = styled(Typography)`
  margin-top: 6px;
  margin-bottom: 12px;
  margin: 0.67em 0px;
  line-height: 1.13;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 56px;
    line-height: 1.04;
  }

  @media screen and (min-width: 1060px) {
    font-size: 64px;
    line-height: 0.97;
  }
`;