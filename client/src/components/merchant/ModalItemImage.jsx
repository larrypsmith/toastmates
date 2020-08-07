import React from 'react';
import styled from 'styled-components/macro';
import ExitModalButton from '../common/ExitModalButton';

const ModalItemImage = ({ src }) => {
  return (
    <StyledModalItemImage hasImage={!!src}>
      <ImageDiv src={src}/>
      <PaddingDiv hasImage={!!src} />
      <StyledExitModalButton />
    </StyledModalItemImage>
  );
};

export default ModalItemImage;

const StyledModalItemImage = styled.div`
  position: relative;
  background-color: transparent;
  height: auto;
  width: ${props => props.hasImage ? '100%' : 'auto'};
  flex-shrink: 0;
  overflow: hidden;

  @media screen and (min-width: 1060px) {
    height: 100%;
    max-height: 600px;
    max-width: 600px;
  }
`;

const ImageDiv = styled.div`
  background-image: ${props => `url(${props.src})`};
  opacity: 1;
  position: absolute;
  background-size: cover;
  top: 0px;
  left: 0px;
  transform: scale(1);
  height: 100%;
  width: ${props => props.src ? '100%' : 'auto'};
  background-position: center center;
  background-repeat: no-repeat;
  transition: opacity 0.4s linear 0s;
`;

const PaddingDiv = styled.div`
  height: auto;
  padding-bottom: ${props => props.hasImage ? '100%' : 'auto'};
`;

const StyledExitModalButton = styled(ExitModalButton)`
  position: absolute;
  left: 16px;
  top: 16px;
  z-index: 100000;
  color: rgb(255, 255, 255);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    left: 24px;
    top: 24px;
  }

  @media screen and (min-width: 1060px) {
    display: none;
  }
`;