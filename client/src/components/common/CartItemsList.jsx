import React from 'react';
import styled from 'styled-components/macro';
import useGetCartItems from '../../hooks/useGetCartItems.js';
import CartItem from './CartItem';

const CartItemsList = () => {
  const { loading, error, data } = useGetCartItems();
  if (loading || error) return null;

  return (
    <StyledCartItemsList>
      {Object
        .values(data.cartItems)
        .map(({ item, quantity }) => (
          <CartItem
            item={item}
            quantity={quantity}
            key={item.id} />
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