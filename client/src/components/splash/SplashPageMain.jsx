import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import Container from '../common/Container';
import Header from './Header';
import Paragraph from './Paragraph';
import MainSection from './MainSection';
import takeoutBoxes from '../../images/takeout-boxes.png';
import itemsGrid from '../../images/items-grid.PNG';

const SplashPageMain = () => (
  <main>
    <Container>
      <MainSection>
        <Container padding={[16, 54, 36]}>
          <MainSectionContent1>
            <Grid1>
              <Header>Order from local favorites near you.</Header>
              <Paragraph>
                Whatever you want, we get it.
                Order delivery for yourself 
                or with friends and watch in real-time
                as your Postmate brings you
                all the things you love.
              </Paragraph>
              <StyledImageContainer1>
                <BackgroundImage
                  src={takeoutBoxes}
                  size='cover'
                  position='center center'
                />
                <ImagePadding width={1328} height={900} />
              </StyledImageContainer1>
              <StyledLink to='/feed'>
                <OrderNowButton>Order Now</OrderNowButton>
              </StyledLink>
            </Grid1>
          </MainSectionContent1>
        </Container>
      </MainSection>
      <MainSection>
        <Container padding={[16, 54, 36]}>
          <MainSectionContent2>
            <Grid2>
              <Header>We deliver more than dinner.</Header>
              <Paragraph>
                Whatever you want, we get it.
                Order delivery for yourself or with friends
                and watch in real-time
                as your Postmate brings you all the things you love.
              </Paragraph>
              <StyledLink to='/feed'>
                <OrderNowButton>Order Now</OrderNowButton>
              </StyledLink>
              <StyledImageContainer2>
                <BackgroundImage
                  src={itemsGrid}
                  size='contain'
                  position='center center'
                />
                <ImagePadding width={470.4} height={313.6} />
              </StyledImageContainer2>
            </Grid2>
          </MainSectionContent2>
        </Container>
      </MainSection>
    </Container>
  </main>
);

export default SplashPageMain;

const ImageContainer = styled.div`
  position: relative;
  background-color: transparent;
  width: 100%;
  overflow: hidden;
  grid-area: image;
`;

const StyledImageContainer1 = styled(ImageContainer)`
  width: calc(100% + 32px);
  align-self: center;

  @media screen and (min-width: 768px) {
    margin-right: -20px;
    margin-top: -60px;
  }

  @media screen and (min-width: 1060px) {
    margin-right: -40px;
    height: auto
  }
`;

const StyledImageContainer2 = styled(ImageContainer)`
  @media screen and (min-width: 1060px) {
    width: 488px;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: ${props => props.size || 'unset'};
  background-position: ${props => props.position || 'unset'};
  background-repeat: no-repeat;
  transition: opacity 0.4s linear 0s;
  background-image: ${props => props.src ? `url(${props.src})` : 'none'};
`;

const ImagePadding = styled.div`
  height: auto;
  padding-bottom: ${props => (props.height / props.width) * 100}%;
`;


const MainSectionContent1 = styled.div`
  padding: 25px 0px 40px;

  @media screen and (min-width: 768px) {
    padding-top: 75px;
    padding-bottom: 15px;
  }

  @media screen and (min-width: 1060px) {
    padding-top: 115px;
    padding-bottom: 135px;
  }
`;

const MainSectionContent2 = styled.div`
  padding: 60px 0;

  @media screen and (min-width: 768px) {
    padding-top: 115px;
    padding-bottom: 80px;
  }
`;

const Grid1 = styled.div`
  display: grid;
  grid-template-areas:
    "image"
    "header"
    "paragraph"
    "button"
  ;
  justify-items: center;

  @media screen and (min-width: 768px) {
    grid-template-areas:
      "header image"
      "paragraph image"
      "button image"
    ;
    grid-template-columns: minmax(auto, 300px) 360px;
    justify-content: space-around;
    justify-items: start;
    
  }

  @media screen and (min-width: 1060px) {
    height: 326px;
    grid-template-columns: minmax(auto, 452px) 600px;
    justify-content: space-between;
  }
`;

const Grid2 = styled.div`
  display: grid;
  grid-template-areas:
    "image"
    "header"
    "paragraph"
    "button"
  ;
  justify-items: center;

  @media screen and (min-width: 768px) {
    grid-template-areas:
      "image header"
      "image paragraph"
      "image button"
    ;
    grid-template-columns: 300px minmax(auto, 300px);
    justify-content: space-around;
    justify-items: start;
    align-content: start;
  }

  @media screen and (min-width: 1060px) {
    height: 326px;
    grid-template-columns: 600px minmax(auto, 452px);
    justify-content: space-between;
  }
`;

const OrderNowButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;
  cursor: pointer;
  text-align: center;
  transition-property: background-color, color;
  transition-duration: 0.2s, 0.2s;
  transition-timing-function: ease-in, ease-out;
  transition-delay: 0s 0s;
  border-radius: 28px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.common.white};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 265px;
  height: 48px; 
  grid-area: button;

  @media screen and (min-width: 768px) {
    width: 165px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;