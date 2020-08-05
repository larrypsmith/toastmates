import React from 'react';
import styled from 'styled-components/macro';
import useGetCartItems from '../../hooks/useGetCartItems';

const Subtotal = () => {
  const { error, data } = useGetCartItems();
  if (error) throw new Error(error.message);

  const subtotal = Object.values(data.cartItems)
    .reduce((total, { item, quantity }) => (
      total + item.price * quantity
    ), 0)

  return (
    <StyledSubtotal>
      <SubtotalText>Subtotal</SubtotalText>
      <PriceText>${Math.round(subtotal * 100) / 100}</PriceText>
    </StyledSubtotal>
  );
};

export default Subtotal;

const StyledSubtotal = styled.div`
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  padding: 26px 16px;
`;

const SubtotalText = styled.p`
  margin: 0px;
`;

const PriceText = styled.p`
  color: rgb(0, 204, 153);
  margin: 0px;
`;