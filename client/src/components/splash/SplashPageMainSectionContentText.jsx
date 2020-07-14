import styled from 'styled-components/macro';

const StyledSplashPageMainSectionContentText = styled.div`
  width: 100%;
  padding-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding-top: 0;
    align-items: flex-start;
    max-width: 300px;
  }

  @media screen and (min-width: 1060px) {
    max-width: 452px;
  }
`;

export default StyledSplashPageMainSectionContentText;