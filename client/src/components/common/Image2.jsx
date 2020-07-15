import React from 'react';
import styled from 'styled-components/macro';

const ImageContainer = styled.div`
  position: relative;
  background-color: transparent;
  width: 100%;
  overflow: hidden;
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


const Image = ({
  src,
  size,
  position,
  width,
  height
}) => (
  <ImageContainer>
    <BackgroundImage
      src={src}
      size={size}
      position={position}
    />
    <ImagePadding width={width} height={height} />
  </ImageContainer>
);

export default Image;