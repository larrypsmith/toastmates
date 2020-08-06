import React from 'react';
import styled from 'styled-components/macro';
import useGetCartItems from '../../hooks/useGetCartItems';

const ViewCartButton = ({ onClick }) => {
  const { loading, error, data } = useGetCartItems();
  if (error) throw new Error(error.message);
  if (loading) return null;

  const numItemsInCart = data.cartItems && data.cartItems.length;
  const isDisabled = numItemsInCart === 0;

  return (
    <StyledButton disabled={isDisabled} onClick={onClick}>
      <CartSize disabled={isDisabled}>{numItemsInCart}</CartSize>
      <StyledSpan>Cart</StyledSpan>
      <StyledSpan2>View Cart</StyledSpan2>
    </StyledButton>
  )
}

export default ViewCartButton;

const StyledButton = styled.button`
  @media screen and (min-width: 768px) {
    background-color: transparent;
    display: inline-flex;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: initial;
    color: rgb(143, 149, 163);
    text-transform: initial;
    position: relative;
    width: auto;
    height: auto;
    border-radius: initial;

    &::after {
      content: "";
      background-image: url(https://buyer-static-gcp.postmates.com/dist/prod/a01e25bb225965bce72e54491e552755.svg);
      display: block;
      width: 4px;
      height: 7px;
      margin-left: 11px;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }

  cursor: pointer;
  appearance: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 204, 153);
  color: rgb(255, 255, 255);
  font-size: 12px;
  letter-spacing: 1.24px;
  height: 48px;
  font-weight: 500;
  text-transform: uppercase;
  width: 100%;
  padding: 0px;
  margin: 0px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  border-radius: 32px;
`;

const CartSize = styled.span`
  @media screen and (min-width: 768px) {
    position: initial;
    left: initial;
    display: inline-flex;
    background-color: ${props => props.disabled
      ? 'rgba(47,49,55,.1)'
      : 'rgb(0, 204, 153)'
    };
    color: ${props => props.disabled
      ? 'white'
      : 'rgb(255, 255, 255)'
    };
    align-items: center;
    justify-content: center;
    min-width: 24px;
    height: 24px;
    font-size: 11px;
    margin-right: 12px;
  }

  position: absolute;
  left: 24px;
`;

const StyledSpan = styled.span`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const StyledSpan2 = styled.span`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;