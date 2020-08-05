import React from 'react';
import styled from 'styled-components/macro';
import useGetCartItems from '../../hooks/useGetCartItems';
import CartItem from './CartItem';

const CartItemsList = () => {
  const { data, error, loading } = useGetCartItems();
  

  if (error) throw new Error(error.message);
  if (loading) return null;
  if (!data || !data.cartItems) return null;

  return (
    <StyledCartItemsList>
      {Object.values(data.cartItems).map(({ item, quantity }) =>
        <CartItem key={item.id} item={item} quantity={quantity} />
      )}
    </StyledCartItemsList>
  );
};

export default CartItemsList;

const StyledCartItemsList = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  border-top: 1px solid rgba(217, 219, 224, 0.5);

  @media screen and (min-width: 1060px) {
    overflow-y: auto;
    max-height: 250px;
    border-top: none;
    box-shadow: rgba(76, 76, 75, 0.1) 0px -2px 4px 0px inset;
  }
`;