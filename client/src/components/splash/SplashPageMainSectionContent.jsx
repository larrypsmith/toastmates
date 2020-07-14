import styled from 'styled-components/macro';

const StyledSplashPageMainSectionContent = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;

  @media screen and (min-width: 768px) {
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    justify-content: space-around;
    position: relative;
    display: flex;
  }

  @media screen and (min-width: 1060px) {
    height: 326px;
    justify-content: space-between;
  }
`;

export default StyledSplashPageMainSectionContent;