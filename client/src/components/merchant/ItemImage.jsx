import React from 'react';
import styled from 'styled-components/macro';

const ItemImage = ({ src, ...props }) => (
  <ItemImageContainer {...props}>
    <Image src={src} />
    <ConstantHeightPadding />
  </ItemImageContainer>
);

export default ItemImage;

const ItemImageContainer = styled.div`
  position: relative;
  background-color: transparent;
  width: 128px;
  height: 128px;
  overflow: hidden;

  @media screen and (min-width: 1060px) {
    position: relative;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
    z-index: inherit;
    background-color: transparent;
  }
`;

const Image = styled.div`
  background-image: ${props => `url(${props && props.src})`};
  opacity: 1;
  position: absolute;
  background-size: cover;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  transition: opacity 0.4s linear 0s;
`;

const ConstantHeightPadding = styled.div`
  height: auto;
  padding-bottom: 100%;
`;