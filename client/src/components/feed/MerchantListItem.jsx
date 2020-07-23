import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const MerchantListItem = ({ merchant }) => {
  return(
  <StyledMerchantListItem>
    <StyledLink to={`/merchant/${merchant.id}`}>
      <MerchantListItemImage url={merchant.imgUrl} />
      <MerchantListItemContent
        name={merchant.name}
        deliveryFee={merchant.deliveryFee}
        deliveryTime={merchant.deliveryTime}
      />
    </StyledLink>
  </StyledMerchantListItem>
);
  }

export default MerchantListItem;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledMerchantListItem = styled.div`
  position: relative;
  flex-shrink: 1;

  &:first-child {
    margin-left: 0;
  }

  @media screen and (max-width: 767px) {
    margin-top: 16px;
    margin-bottom: 16px;
    flex: 1 1 100%;
  }

  @media screen and (max-width: 1059px) and (min-width: 768px) {
    margin-top: 24px;
    margin-left: 24px;
    flex: 0 1 calc(50% - 12px);
    
    &:nth-of-type(2n + 1) {
      margin-left: 0;
    }
  }

  @media screen and (min-width: 1060px) {
    margin-top: 36px;
    margin-left: 36px;
    flex: 0 1 calc(33.33333333333333% - 24px);

    &:nth-of-type(3n + 1) {
      margin-left: 0;
    }
  }
`;

const MerchantListItemImage = ({ url }) => (
  <StyledMerchantListItemImage>
    <div>
      <BackgroundImage url={url} />
    </div>
    <Padding />
    <Other />
  </StyledMerchantListItemImage>
);

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

const MerchantListItemContent = ({ name, deliveryFee, deliveryTime }) => (
  <StyledMerchantListItemContent>
    <MerchantName name={name} />
  </StyledMerchantListItemContent>
);

const StyledMerchantListItemContent = styled.div`
  position: relative;
  padding-top: 16px;
`;

const MerchantName = ({ name }) => (
  <StyledMerchantName>
    <Text>
      {name}
      <CheckmarkIcon />
    </Text>
  </StyledMerchantName>
)

const StyledMerchantName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  color: rgb(45, 49, 56);
  display: flex;
  margin-top: 0px;
  margin-bottom: 4px;
`;

const Text = styled.span`
  flex: 1 1 0%;
`;

const CheckmarkIcon = () => (
  <CheckmarkIconContainer>
    <SVG
      width='14'
      height='14'
      viewBox='0 0 14'
    >
      <g
        fill='none'
        fillRule='evenodd'
      >
        <rect
          fill='#0C9'
          width='14'
          height='14'
          rx='7'
        />
        <path
          fill='#FFF'
          path='M3 7l3 3 4.5-4.5-1-1L6 8 4 6'
        />
      </g>
    </SVG>
  </CheckmarkIconContainer>
);

const CheckmarkIconContainer = styled.span`
  justify-content: center;
  align-items: center;
  display: inline-flex;
  align-self: center;
  height: 14px;
  width: 14px;
  margin-left: 8px;
  vertical-align: -2px;
`;

const SVG = styled.svg`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;