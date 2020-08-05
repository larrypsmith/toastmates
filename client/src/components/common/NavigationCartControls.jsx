import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import ViewCartButton from './ViewCartButton';

const NavigationCartControls = () => {
  return (
    <StyledSpan>
      <FlexParent>
        <Pipe />
        <ViewCartButton />
      </FlexParent>
    </StyledSpan>
  )
};

export default NavigationCartControls;

const StyledSpan = styled.span`
  padding-left: 16px;
`;

const FlexParent = styled.div`
  @media screen and (max-width: 767px) {
    position: fixed;
    bottom: 48px;
    left: 20px;
    right: 20px;
  }

  display: flex;
  align-items: center;
`;

const Pipe = styled.span`
  @media screen and (max-width: 767px) {
    display: none;
  }

  display: inline-block;
  height: 24px;
  width: 1px;
  background-color: #2D3138;
  opacity: 0.25;
  margin-right: 24px;
  margin-left: 7px;
`;