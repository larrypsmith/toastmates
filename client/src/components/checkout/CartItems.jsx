import React from 'react';
import styled from 'styled-components/macro';
import useGetCartItems from '../../hooks/useGetCartItems';
import CartItem from './CartItem';

const CartItems = () => {
  const { data } = useGetCartItems();
  
  return (
    <StyledCartItems>
      <Container>
        <StyledUL>
          {Object.values(data.cartItems).map(({ item, quantity }) => (
            <CartItem item={item} quantity={quantity} key={item.id} />
          ))}
        </StyledUL>
      </Container>
    </StyledCartItems>
  )
};

export default CartItems;

const StyledCartItems = styled.div`
  padding-bottom: 20px;
`;

const Container = styled.div`
  @media screen and (min-width: 1060px) {
    padding-left: 0px;
    padding-right: 0px;
  }

  width: 100%;
  padding-right: 16px;
  padding-left: 16px;
`;

const StyledUL = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;

  & > li {
    margin-bottom: 22px;
    padding-bottom: 13px;
    border-bottom: 1px solid rgb(236, 237, 239);

    @media screen and (min-width: 1060px) {
      padding-bottom: 0px;
      border-bottom: none;
    }
  }
`;