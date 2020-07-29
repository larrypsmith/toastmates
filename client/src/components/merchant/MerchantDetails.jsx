import React from 'react';
import styled from 'styled-components/macro';
import ClockIcon from './ClockIcon';
import IconChip from './IconChip';
import MapMarkerIcon from './MapMarkerIcon';
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