import React from 'react';
import styled from 'styled-components/macro';
import QuantitySelector from './QuantitySelector';
import AddToCartButton from './AddToCartButton';

const DesktopCartControls = ({ item, quantity, setQuantity, ...props }) => (
  <StyledDesktopCartControls {...props}>
    <StyledQuantitySelector quantity={quantity} setQuantity={setQuantity} />
    <AddToCartButton item={item} quantity={quantity} />
  </StyledDesktopCartControls>
);

export default DesktopCartControls;

const StyledDesktopCartControls = styled.div`
  @media screen and (max-width: 1059px) {
    display: none;
  }

  display: flex;
  position: absolute;
  bottom: 0px;
  left: 0px;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: rgb(255, 255, 255);
  padding: 16px 20px;
`;

const StyledQuantitySelector = styled(QuantitySelector)`
  margin-left: auto;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 12px;
`;