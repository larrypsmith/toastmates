import styled from 'styled-components/macro';

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${props => props.zIndex || 1};
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: ${props => props.backgroundSize || 'cover'};
  background-color: transparent;

  @media screen and (min-width: 1060px) {
    background-size: auto 120%;
  }
`;

export default BackgroundImage;