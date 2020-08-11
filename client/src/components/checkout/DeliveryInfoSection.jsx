import React from 'react';
import styled from 'styled-components/macro';

const DeliveryInfoSection = ({ headerText, children, ...props }) => (
  <StyledDeliveryInfoSection {...props}>
    <HeaderDiv>
      <HeaderSpan>
        {headerText}
      </HeaderSpan>
    </HeaderDiv>
    <StyledSection>
      {children}
    </StyledSection>
  </StyledDeliveryInfoSection>
);

export default DeliveryInfoSection;

const StyledDeliveryInfoSection = styled.section`
  @media screen and (min-width: 1060px) {
    margin-top: 10px;
    border-top: none;
  }

  margin-top: 0px;
  border-top: 8px solid rgb(247, 247, 248);
`;

const HeaderDiv = styled.div`
  @media screen and (min-width: 1060px) {
    padding: 14px 0px;
  }

  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 55px;
  padding: 14px 16px;
`;

const HeaderSpan = styled.span`
  @media screen and (min-width: 1060px) {
    font-size: 16px;
  }

  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.3px;
`;

const StyledSection = styled.section`
  @media screen and (min-width: 1060px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  font-size: 14px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 16px;
  padding-left: 16px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(236, 237, 239);
  border-image: initial;
`;