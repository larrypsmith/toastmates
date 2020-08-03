import React from 'react';
import styled from 'styled-components/macro';
import ItemDetails from './ItemDetails';

const ModalItemContent = ({
  item,
  quantity,
  setQuantity,
  ...props
}) => (
  <StyledModalItemContent {...props}>
    <ItemDetails
      itemName={item.name}
      description={item.description}
      quantity={quantity}
      setQuantity={setQuantity}
    />
    {/* <CartControls
      item={item}
      quantity={quantity}
      setQuantity={setQuantity}
    /> */}
  </StyledModalItemContent>
);

export default ModalItemContent;

const StyledModalItemContent = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;