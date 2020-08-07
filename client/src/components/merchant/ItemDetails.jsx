import React from 'react';
import styled from 'styled-components/macro';
import TopPaddingAndExitButton from './TopPaddingAndExitButton';
import NameAndDescription from './NameAndDescription';
import QuantitySelector from './QuantitySelector';

const ItemDetails = ({
  itemName,
  description,
  quantity,
  setQuantity
}) => (
  <StyledItemDetails>
    <TopPaddingAndExitButton />
    <NameAndDescription itemName={itemName} description={description} />
    <StyledQuantitySelector
      quantity={quantity}
      setQuantity={setQuantity}
    />
  </StyledItemDetails>  
);

export default ItemDetails;

const StyledItemDetails = styled.div`
  position: relative;
  height: 100%;

  @media screen and (min-width: 1060px) {
    height: calc(100% - 88px);
    overflow-y: auto;
    border-bottom: 1px solid rgba(217, 219, 224, 0.5);
  }
`;

const StyledQuantitySelector = styled(QuantitySelector)`
  margin: 36px auto;

  @media screen and (min-width: 1060px) {
    display: none;
  }
`;