import styled from 'styled-components/macro';

const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${props => props.z || 1};
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-position: ${props => props.backgroundPosition || 'center bottom'};
  background-size: ${props => props.backgroundSize || 'cover'};
  background-color: transparent;
  opacity: 1;
`;

export default Image;