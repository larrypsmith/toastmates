import React from 'react';
import styled from 'styled-components/macro';
import { cartItemsVar, cartMerchantVar, modalVar } from '../../cache';
import { useRouteMatch } from 'react-router-dom';
import useCloseModal from '../../hooks/useCloseModal';
import ConfirmCartChangeModal from './ConfirmCartChangeModal';

const AddToCartButton = ({ item, quantity, ...props }) => {
  const closeModal = useCloseModal();
  const match = useRouteMatch();

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const cartMerchant = cartMerchantVar();

    let cartItems;
    if (cartMerchant === match.params.id || cartMerchant === '') {
      cartItems = JSON.parse(JSON.stringify(cartItemsVar()));

      if (cartItems.hasOwnProperty(item.id)) {
        (cartItems[item.id]).quantity += quantity;
      } else {
        cartItems[item.id] = { item, quantity };
      }

      cartItemsVar(cartItems);
      localStorage.setItem('CART_ITEMS', JSON.stringify(cartItemsVar()));
      
      cartMerchantVar(match.params.id);
      localStorage.setItem('CART_MERCHANT', cartMerchantVar());
    
      closeModal();
    } else {
      const Component = () => (
        <ConfirmCartChangeModal item={item} quantity={quantity} />
      );
      modalVar(Component);
    }
  };

  return (
    <StyledAddToCartButton {...props} onClick={handleClick}>
      <StyledSpan />
      <span>Add to cart</span>
      <Total>${item.price * quantity}</Total>
    </StyledAddToCartButton>
  );
};

export default AddToCartButton;

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

  @media screen and (min-width: 1060px) {
    position: relative;
    box-shadow: none;
    width: 65%;
  }

  & > * {
    flex: 1 1 0%;
  }
`;

const Total = styled.span`
  text-align: right;
  font-size: 14px;
`;

const StyledSpan = styled.span`
  @media screen and (min-width: 1060px) {
    display: none;
  }
`;