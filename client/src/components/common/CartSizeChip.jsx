import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import useNumItemsInCart from '../../hooks/useNumItemsInCart';
import CartItemsList from '../merchant/CartItemsList';
import CheckoutButton from '../merchant/CheckoutButton';
import Subtotal from '../merchant/Subtotal';
import Typography from './Typography';

const CartSizeChip = (props) => {
  const numItemsInCart = useNumItemsInCart();
  const [isDropdownHidden, setIsDropdownHidden] = useState(true);

  // const hideDropdown = (e) => {
  //   debugger
  //   e.stopPropagation();
  //   setIsDropdownHidden(true);
  // };

  useEffect(() => {
    if (numItemsInCart > 0) {
      setIsDropdownHidden(false);
    }
  }, [numItemsInCart]);

  // useEffect(() => {
  //   window.addEventListener('load', hideDropdown);
  //   return () => {
  //     window.removeEventListener('load', hideDropdown)
  //   };
  // }, [hideDropdown]);
  
  const isDisabled = numItemsInCart < 1;
  const text = numItemsInCart === 1
    ? 'item'
    : 'items';

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropdownHidden(!isDropdownHidden);
  };

  return (
    <CartSizeChipContainer {...props}>
      <StyledContainer>
        <StyledButton disabled={isDisabled} onClick={handleClick}>
          <span />
          <CartIcon isDisabled={isDisabled} />
          <StyledSpan isDisabled={isDisabled}>
            {numItemsInCart} {text}
          </StyledSpan>
        </StyledButton>
        <DropdownMenuContainer hidden={isDropdownHidden}>
          <div>
            <Container>
              <OrderTypography size='24px' weight='600'>
                Order
              </OrderTypography>
            </Container>
            <CartItemsList hidden={isDisabled} />
            <Subtotal />
            <CheckoutButton />
          </div>
        </DropdownMenuContainer>
      </StyledContainer>
    </CartSizeChipContainer>
  )
};

export default CartSizeChip;

const CartSizeChipContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 1059px) {
    display: none;
  }
`;

const StyledContainer = styled.div`
  position: relative;
  height: 45px;
`;

const StyledButton = styled.button`
  color: ${props => props.disabled ? 'rgb(45, 49, 56)' : 'white'};
  background-color: ${props => props.disabled
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

const DropdownMenuContainer = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(16, 25, 30, 0.08) 0px 1px 4px 0px;
  position: absolute;
  z-index: 1100;
  width: 362px;
  max-height: 550px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(242, 243, 243);
  border-image: initial;

  @media screen and (min-width: 768px) {
    bottom: -13px;
    left: calc(-50% + 62.5px + -100px);
    transform: translate(calc(-50% + 62.5px + 0px), 100%);

    &::before {
      margin-left: -9px;
      border-bottom-color: rgb(242, 243, 243) !important;
      border-width: 9px !important;
      position: absolute;
      width: 0px;
      height: 0px;
      content: "";
      bottom: 100%;
      left: calc(50% - -100px);
      border-style: solid;
      border-color: transparent;
      border-image: initial;
    }
  }
`;

const Container = styled.div`
  padding-left: 16px;
  padding-right: 16px;
`;

const OrderTypography = styled(Typography)`
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 20px;
  padding-bottom: 16px;
`;