import React from 'react';
import styled from 'styled-components/macro';

const HeaderImage = ({ src }) => (
  <StyledHeaderImage>
    <BackgroundImage src={src} />
  </StyledHeaderImage>
);

export default HeaderImage;

const StyledHeaderImage = styled.div`
  position: fixed;
  width: 100%;
  height: 130px;
  /* margin-top: -130px; */
  background-color: rgb(247, 247, 248);
  overflow: hidden;

  @media screen and (min-width: 1060px) {
    height: 260px;
    /* margin-top: -260px; */
  }
`;

const BackgroundImage = styled.div`
  background-image: ${props => `url(${props.src})`};
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