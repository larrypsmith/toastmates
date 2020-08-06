import React from 'react';
import styled from 'styled-components/macro';
import RemoveItemFromCartButton from './RemoveItemFromCartButton';

const CartItem = ({ item, quantity }) => {
  const { id, name, price } = item;

  return (
    <li>
      <Container>
        <Container2>
          <RemoveItemFromCartButton id={id} />
          <CartQuantity>{quantity}</CartQuantity>
          <ItemNameAndPriceContainer>
            <NameText>{name}</NameText>
            <PriceText>${price}</PriceText>
          </ItemNameAndPriceContainer>
        </Container2>
      </Container>
    </li>
  );
};

export default CartItem;

const Container = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  padding: 20px;
`;

const Container2 = styled.div`
  position: relative;
  padding-left: 40px;
  cursor: pointer;
`;

const CartQuantity = styled.span`
  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  position: absolute;
  color: #2F3137;
  font-size: 12px;
  background-color: #F6F6F8;
  font-weight: 500;
  left: 0;
`;

const ItemNameAndPriceContainer = styled.div`
  color: #8F95A3;
  line-height: 13px;
  font-size: 13px;
`;

const NameText = styled.h4`
  color: #000;
  margin: 0 0 2px;
  line-height: 20px;
  letter-spacing: -0.08px;
  font-size: 14px;
  font-weight: 500;
  padding: 2px 0;
`;

const PriceText = styled.span`
  display: block;
  margin-bottom: 6px;
`;