import React from 'react';
import styled from 'styled-components/macro';
import Container from '../common/Container';
import Header from './Header';
import OrderNowButton from './SplashPageOrderNowButton';
import Paragraph from './Paragraph';
import ResponsiveImage from '../common/ResponsiveImage';
import SplashPageMainSection from './SplashPageMainSection';
import SplashPageMainSectionContent from './SplashPageMainSectionContent';
import SplashPageMainSectionContentText from './SplashPageMainSectionContentText';
import VerticalContainer from './VerticalContainer';
import takeoutBoxes from '../../images/takeout-boxes.png';
import itemsGrid from '../../images/items-grid.PNG';

const StyledResponsiveImage = styled(ResponsiveImage)`
  width: calc(100% + 32px);
`;

const StyledFirstSplashPageMainSectionContentText = styled(SplashPageMainSectionContentText)`
  @media screen and (min-width: 1060px) {
    max-width: 452px;
  }
`;

const StyledSecondSplashPageMainSectionContentText = styled(SplashPageMainSectionContentText)`
  @media screen and (min-width: 1060px) {
    max-width: 400px;
    padding-top: 60px;
  }
`;

const SplashPageMain = () => (
  <StyledSplashPageMain>
    <SplashPageMainSection>
      <Container maxWidth='1024px' padding={[16, 54, 36]}>
        <VerticalContainer>
          <SplashPageMainSectionContent>
            <StyledFirstSplashPageMainSectionContentText>
              <Header>
                Order from local favorites near you.
              </Header>
              <Paragraph>
                Need another charger?
                Kitchen staples?
                Party supplies?
                We’ve got everything you need
                available for delivery within an hour.
              </Paragraph>
              <OrderNowButton>Order Now</OrderNowButton>
            </StyledFirstSplashPageMainSectionContentText>
            <StyledResponsiveImage src={takeoutBoxes} alt="" backgroundPosition='center center' z={1000} />
          </SplashPageMainSectionContent>
        </VerticalContainer>
      </Container>
    </SplashPageMainSection>
    <SplashPageMainSection>
      <Container maxWidth='1024px' padding={[16, 54, 36]}>
        <VerticalContainer>
          <SplashPageMainSectionContent reverse>
            <StyledSecondSplashPageMainSectionContentText>
              <Header>
                We deliver more than dinner.
              </Header>
              <Paragraph>
                Whatever you want, we get it.
                Order delivery for yourself or with friends
                and watch in real-time
                as your Postmate brings you all the things you love.
              </Paragraph>
              <OrderNowButton>Order Now</OrderNowButton>
            </StyledSecondSplashPageMainSectionContentText>
            <ResponsiveImage src={itemsGrid} alt="" backgroundPosition='center center' z={1000} />
          </SplashPageMainSectionContent>
        </VerticalContainer>
      </Container>
    </SplashPageMainSection>

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