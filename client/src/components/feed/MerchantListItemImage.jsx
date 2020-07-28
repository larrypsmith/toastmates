import React from 'react';
import styled from 'styled-components/macro';

const MerchantListItemImage = ({ url }) => (
  <StyledMerchantListItemImage>
    <div>
      <BackgroundImage url={url} />
    </div>
    <Padding />
    <Other />
  </StyledMerchantListItemImage>
);

export default MerchantListItemImage;

const StyledMerchantListItemImage = styled.div`
  position: relative;
  background-color: transparent;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  background-image: ${props => `url(${props.url})`};
  opacity: 1;
  position: absolute;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.4s linear;
  margin-bottom: 16px;
  width: 100%;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 50% 50%,rgba(0,0,0,0.0),rgba(0,0,0,0.0) 44%,rgba(0,0,0,0.2));
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
`;

const Padding = styled.div`
  height: auto;
  padding-bottom: 61.1%;
`;

const Other = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 10px;
  right: 12px;
  left: 0;
`;