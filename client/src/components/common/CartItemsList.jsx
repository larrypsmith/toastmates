import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import useGetCart from '../../hooks/useGetCart.js';
import CartItem from './CartItem';
import Cart from '../../Cart';

const CartItemsList = ({ setIsHidden }) => {
  const { loading, error, data } = useGetCart();

  const numItemsInCart = Object
    .values(data.cartItems)
    .reduce((total, { quantity }) => total + quantity, 0);

  const shownSinceRefresh = useRef(false);
  const prevNumItemsInCart = useRef(numItemsInCart);
  const prevMerchant = useRef(data.cartMerchant);
  const numItemsInStorage = useRef(Cart.numItemsInStorage());

  useEffect(() => {
    console.log('Running useEffect when numItemsInCart = ', numItemsInCart);

    debugger
    if (numItemsInCart === 0) {
      setIsHidden(true);
    } else if (!shownSinceRefresh.current && (numItemsInCart > numItemsInStorage.current)) {
      setIsHidden(false);
      shownSinceRefresh.current = true;
    } else {
      if (data.cartMerchant !== prevMerchant.current) {
        setIsHidden(false);
      } 
    }

    prevMerchant.current = data.cartMerchant;
    prevNumItemsInCart.current = numItemsInCart;
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