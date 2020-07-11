import React from 'react';
import styled from 'styled-components/macro';
import Image from './Image';

const StyledResponsiveImage = styled.div`
  position: relative;
  background-color: transparent;
  width: calc(100% + 32px);
  overflow: hidden;

  @media screen and (min-width: 768px) {
    margin-right: -20px;
    margin-top: -80px;
    max-width: 360px;
  }

  @media screen and (min-width: 1060px) {
    margin-right: -40px;
    max-width: none;
    width: 600px;
    height: auto;
  }
`;

const Img = styled.img`
  display: none;
`;

const PaddingDiv = styled.div`
  height: auto;
  padding-bottom: 67%;
`;

const ResponsiveImage = ({ src, alt, backgroundPosition, z }) => (
  <StyledResponsiveImage>
    <div>
      <Img src={src} alt={alt} />
      <Image
        src={src}
        backgroundPosition={backgroundPosition}
        z={z}
      />
    </div>
    <PaddingDiv />
  </StyledResponsiveImage>
);

export default ResponsiveImage;