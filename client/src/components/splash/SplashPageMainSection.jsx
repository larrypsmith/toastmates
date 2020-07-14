import React from 'react';
import styled from 'styled-components/macro';
import Container from '../common/Container';
import ResponsiveImage from '../common/ResponsiveImage';
import Header from './Header';
import Paragraph from './Paragraph';

const StyledSplashPageMainSection = styled.section`
  margin-left: -16px;
  margin-right: -16px;
  background-color: ${({ theme }) => theme.palette.common.white};
  padding-bottom: 16px;

  @media screen and (min-width: 768px) {
    padding-bottom: 0;
    margin-left: -24px;
    margin-right: -24px;
  }

  @media screen and (min-width: 1060px) {
    margin-left: -36px;
    margin-right: -36px;
  }
`;

// const SplashPageMainSection = () => (
//   <StyledSplashPageMainSection>
//     <Container maxWidth='1024px' padding={[16, 54, 36]}>
//       <StyledVerticalContainer>
//         <StyledSplashPageMainSectionContent>
//           <StyledSplashPageMainSectionContentText>
//             <Header>
//               {headerText}
//             </Header>
//             <Paragraph>
//               {paragraphText}
//             </Paragraph>
//             <OrderNowButton>Order Now</OrderNowButton>
//           </StyledSplashPageMainSectionContentText>
//           <ResponsiveImage src={imgSrc} alt="" backgroundPosition='center center' z={1000} />
//         </StyledSplashPageMainSectionContent>
//       </StyledVerticalContainer>
//     </Container>
//   </StyledSplashPageMainSection>
//   );

export default StyledSplashPageMainSection;