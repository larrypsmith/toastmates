import React from 'react';
import styled from 'styled-components/macro';
import AddToCartButton from './AddToCartButton';

const MobileCartControls = ({ item, quantity, ...props }) => (
  <StyledMobileCartControls {...props}>
    <AddToCartButton item={item} quantity={quantity} />
  </StyledMobileCartControls>
);

export default MobileCartControls;

const StyledMobileCartControls = styled.div`
  display: flex;
  position: absolute;
  bottom: 0px;
  left: 0px;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: rgb(255, 255, 255);
  padding: 16px 16px 0px;

  @media screen and (min-width: 1060px) {
    display: none;
  }
`;