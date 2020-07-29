import React from 'react';
import styled from 'styled-components/macro';
import Typography from '../common/Typography';

const MerchantDetails = ({ merchant }) => (
  <Container>
    <VerticalContainer>
      <DeliveryFeeText
        weight='600'
        color='primary'
        uppercase
      >
        ${merchant.deliveryFee} delivery
      </DeliveryFeeText>
      <NameText weight='600'>
        {merchant.name}
      </NameText>
      <IconChipsContainer>
        <IconChip
          icon={ClockIcon}
          text={`${merchant.deliveryTime.low}-${merchant.deliveryTime.high} min`}
        />
        <IconChip
          icon={MapMarkerIcon}
          text={`${merchant.address}`}
        />
      </IconChipsContainer>
    </VerticalContainer>
  </Container>
);

export default MerchantDetails;

const Container = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  max-width: 1024px;
  box-sizing: content-box;
  margin: 0px auto;
  position: relative;

  @media screen and (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  
  @media screen and (min-width: 1060px) {
    padding-left: 36px;
    padding-right: 36px;
  }
`;

const VerticalContainer = styled.div`
  padding-top: 27px;
  padding-bottom: 24px;

  @media screen and (min-width: 1060px) {
    padding-top: 42px;
    padding-bottom: 54px;
  }
`;

const DeliveryFeeText = styled(Typography)`
  margin-bottom: 8px;
  font-size: 12px;

  @media screen and (min-width: 1060px) {
    font-size: 14px;
  }
`;

const NameText = styled(Typography)`
  font-size: 32px;

  @media screen and (min-width: 1060px) {
    font-size: 42px;
  }
`;

const IconChipsContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & > div {
    margin-bottom: 8px;
  }

  & > div:not(:last-child) {
    margin-right: 8px;
  }
` ;

const IconChip = ({ icon: Icon, text }) => (
  <StyledIconChip>
    <Icon />
    <Typography
      size='11px'
      weight='500'
      uppercase
    >
      {text}
    </Typography>
  </StyledIconChip>
);

const StyledIconChip = styled.div`
  font-size: 11px;
  font-weight: 500;
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 32px;
  background-color: rgb(255, 255, 255);
  text-transform: uppercase;
  border-radius: 16px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(217, 219, 224, 0.5);
  border-image: initial;
  padding: 0px 14px;
  transition: background-color 100ms ease-in-out 0s;

  & > :not(:last-child) {
    margin-right: 8px;
  }
`;

const ClockIcon = () => (
  <svg width='12' height='12'>
    <path
      d='M6 6V2H5v5h4V6H6zm0-6a6 6 0 110 12A6 6 0 016 0z'
      fill='#8F95A3'
      fillRule='evenodd'
      fillOpacity='.592'
    />
  </svg>
);

const MapMarkerIcon = () => (
  <svg width='10' height='12'>
    <path
      d='M5 12C1.667 9.5 0 7.125 0 4.875 0 2.183 2.239 0 5 0s5 2.183 5 4.875C10 7.125 8.333 9.5 5 12zm0-5a2 2 0 100-4 2 2 0 000 4z'
      fill='#8F95A3'
      fillRule='evenodd'
      fillOpacity='.592'
    />
  </svg>
);