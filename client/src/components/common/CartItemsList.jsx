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
  const openedYet = useRef(false);

  console.log('merchant on load: ', cartMerchantOnLoad.current);
  console.log('current merchant: ', data.cartMerchant);

  useEffect(() => {
    if (data.cartMerchant !== cartMerchantOnLoad.current) {
      setIsHidden(false);
      openedYet.current = true;
      cartMerchantOnLoad.current = data.cartMerchant;
      cartSizeOnLoad.current = numItemsInCart;
    } else if (
      numItemsInCart - cartSizeOnLoad.current === 1 &&
      !openedYet.current
    ) {
      setIsHidden(false);
      openedYet.current = true;
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