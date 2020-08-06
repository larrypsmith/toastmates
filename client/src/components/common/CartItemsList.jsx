import React from 'react';
import styled from 'styled-components/macro';
import useGetCartItems from '../../hooks/useGetCartItems.js';
import CartItem from './CartItem';

const CartItemsList = () => {
  const { loading, error, data } = useGetCartItems();
  if (loading || error) return null;

  const items = {};
  for (let itemId of data.cartItems) {
    if (data.cartItems.hasOwnProperty(itemId)) {
      items[itemId]++;
    } else {
      items[itemId] = 1;
    }
  }

  return (
    <StyledCartItemsList>
      {Object
        .entries(items)
        .map(([itemId, quantity]) => (
          <CartItem id={itemId} quantity={quantity} key={itemId} />
        ))
      }
    </StyledCartItemsList>
    )
};

export default CartItemsList;

const StyledCartItemsList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
`;