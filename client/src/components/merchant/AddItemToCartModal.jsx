import React, { useState } from 'react';
import styled from 'styled-components/macro';
import ModalItemImage from './ModalItemImage';
import ModalItemContent from './ModalItemContent';
import { cartVar } from '../../cache';
import useCloseModal from '../../hooks/useCloseModal';

const AddItemToCartModal = ({ item, ...props }) => {
  const [quantity, setQuantity] = useState(1);
  
  return (
    <StyledAddItemToCartModal {...props}>
      <StyledForm>
        <FlexParent>
          <ModalItemImage src={item.imgUrl} />
          <ModalItemContent
            item={item}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </FlexParent>
        <MobileCartControls item={item} quantity={quantity} />
      </StyledForm>
    </StyledAddItemToCartModal>
  );
};

export default AddItemToCartModal;

const StyledAddItemToCartModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(255, 255, 255);
  overflow-y: scroll;
  box-shadow: rgba(34, 34, 34, 0.15) 0px 2px 20px 0px;
  height: 100%;
  width: 100%;
  
  @media screen and (min-width: 1060px) {
    height: 100%;
    width: 100%;
    max-height: 600px;
    max-width: 1060px;
    visibility: visible;
    overflow: hidden;
  }
`;

const StyledForm = styled.form`
  height: 100%;
`;

const FlexParent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 1059px) {
    overflow-y: scroll;
    height: calc(100% - 108px);
    border-bottom: 1px solid rgba(217, 219, 224, 0.5);
  }

  @media screen and (min-width: 1060px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const MobileCartControls = ({ item, quantity, ...props }) => (
  <StyledMobileCartControls {...props}>
    <AddToCartButton item={item} quantity={quantity} />
  </StyledMobileCartControls>
);

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

const AddToCartButton = ({ item: { id, price }, quantity, ...props }) => {
  const closeModal = useCloseModal();
  
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const cart = cartVar();
    if (cart.hasOwnProperty(id)) {
      cart[id] += quantity;
    } else {
      cart[id] = quantity;
    }
    
    cartVar(cart);
    closeModal();
  };

  return (
    <StyledAddToCartButton {...props} onClick={handleClick}>
      <span />
      <span>Add to cart</span>
      <Total>${price * quantity}</Total>
    </StyledAddToCartButton>
  );
};

const StyledAddToCartButton = styled.button`
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
  height: 56px;
  background-color: rgb(0, 204, 153);
  color: rgb(255, 255, 255);
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-weight: 600;
  align-items: center;
  margin: 0px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  transition: background-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s;
  padding: 0px 16px;
  border-radius: 28px;

  @media screen and (max-width: 1059px) {
    margin-bottom: 36px;
  }

  & > * {
    flex: 1 1 0%;
  }
`;

const Total = styled.span`
  text-align: right;
  font-size: 14px;
`;