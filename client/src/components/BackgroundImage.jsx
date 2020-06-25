import styled from 'styled-components/macro';

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${props => props.zIndex || 1};
  background-image: url(${props => props.url});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
  background-color: transparent;
`;

export default BackgroundImage;