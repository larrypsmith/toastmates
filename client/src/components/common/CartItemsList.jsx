import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import useGetCart from '../../hooks/useGetCart.js';
import CartItem from './CartItem';

const CartItemsList = ({ setIsHidden }) => {
  const { loading, error, data } = useGetCart();

  const numItemsInCart = Object
    .values(data.cartItems)
    .reduce((total, { quantity }) => total + quantity, 0);

  const cartSizeOnLoad = useRef(numItemsInCart);
  const cartMerchantOnLoad = useRef(data.cartMerchant);

  useEffect(() => {
    if (
      numItemsInCart > cartSizeOnLoad.current ||
      data.cartMerchant !== cartMerchantOnLoad.current
    ) {
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