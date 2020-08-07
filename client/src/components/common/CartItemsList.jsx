import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import useGetCartItems from '../../hooks/useGetCartItems.js';
import CartItem from './CartItem';

const CartItemsList = ({ setIsHidden }) => {
  const { loading, error, data } = useGetCartItems();

  const numItemsInCart = Object
    .values(data.cartItems)
    .reduce((total, { quantity }) => total + quantity, 0);

  const cartSizeOnLoad = useRef(numItemsInCart);

  useEffect(() => {
    if (numItemsInCart > cartSizeOnLoad.current) {
      setIsHidden(false);
    }
  }, [numItemsInCart])
  
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
  );
};

export default CartItemsList;

const StyledCartItemsList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
`;