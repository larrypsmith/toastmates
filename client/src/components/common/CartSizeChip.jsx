import React from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components/macro';

const GET_CART = gql`
  query GetCart {
    cart @client
  }
`;

const CartSizeChip = () => {
  const { loading, error, data } = useQuery(GET_CART);
  if (loading) return null;
  if (error) {
    console.log(error);
    return null;
  }

  const numItemsInCart = Object.values(data.cart)
    .reduce((total, n) => total + n, 0);

  const isDisabled = numItemsInCart < 1;
  const text = numItemsInCart === 1
    ? 'item'
    : 'items';

  return (
    <CartSizeChipContainer>
      <StyledCartSizeChip>
        <StyledButton isDisabled={isDisabled}>
          <span />
          <CartIcon isDisabled={isDisabled} />
          <StyledSpan isDisabled={isDisabled}>
            {numItemsInCart} {text}
          </StyledSpan>
        </StyledButton>
      </StyledCartSizeChip>
    </CartSizeChipContainer>
  )
};

export default CartSizeChip;

const CartSizeChipContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledCartSizeChip = styled.div`
  position: relative;
  height: 45px;
`;

const StyledButton = styled.button`
  color: ${props => props.isDisabled ? 'rgb(45, 49, 56)' : 'white'};
  background-color: ${props => props.isDisabled
    ? 'rgb(255, 255, 255)'
    : props.theme.palette.primary.main
  };
  font-size: 14px;
  letter-spacing: initial;
  font-weight: 600;
  text-transform: uppercase;
  line-height: normal;
  display: flex;
  height: 45px;
  justify-content: center;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(217, 219, 224, 0.5);
  border-image: initial;
  padding: 0px 20px;
  margin: 0px;
  cursor: pointer;
  text-align: center;
  align-items: center;
  width: 100%;
  margin: 0px;
  transition: background-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s;
  border-radius: 28px;
  padding: 0px 20px;
`;

const CartIcon = styled.span`
  text-align: center;
  flex: 1 1 0%;
  margin-right: 9px;
  position: relative;
  flex: initial;
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: ${props => props.isDisabled
    ? 'rgb(217, 219, 224)'
    : 'white'
  };
  padding-right: 12px;

  &::before {
    content: ${props => props.isDisabled
      ? 'url(https://buyer-static-gcp.postmates.com/dist/prod/91f1baf9ce3e21febd8c2c6c309e0af8.svg)'
      : 'url(https://buyer-static-gcp.postmates.com/dist/prod/269b269ae0a3c4372d3f6c557faa3428.svg)'
    }
  }
`;

const StyledSpan = styled.span`
  font-size: 13px;
  letter-spacing: 0.8px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${props => props.isDisabled ? 'rgb(143, 149, 163)' : 'white'};
  text-align: left;
`;