import React from 'react';
import styled from 'styled-components/macro';
import CartShow from './CartShow';
import Overlay from './Overlay';
import ViewCartButton from './ViewCartButton';
import { hideCartVar } from '../../cache';
import useGetHideCart from '../../hooks/useGetHideCart';

const NavigationCartControls = (props) => {
  const { data } = useGetHideCart();

  const handleClick = (e) => {
    e.stopPropagation();
    hideCartVar(false);
  }
  
  return (
    <StyledSpan {...props}>
      <FlexParent>
        <Pipe />
        <ViewCartButton onClick={handleClick} />
      </FlexParent>
      <CartShow isHidden={data.hideCart} />
      <Overlay
        hidden={data.hideCart}
        onClick={() => hideCartVar(true)}
      />
    </StyledSpan>
  )
};

export default NavigationCartControls;

const StyledSpan = styled.span`
  padding-left: 16px;
`;

const FlexParent = styled.div`
  @media screen and (max-width: 767px) {
    position: fixed;
    bottom: 48px;
    left: 20px;
    right: 20px;
  }

  display: flex;
  align-items: center;
`;

const Pipe = styled.span`
  @media screen and (max-width: 767px) {
    display: none;
  }

  display: inline-block;
  height: 24px;
  width: 1px;
  background-color: #2D3138;
  opacity: 0.25;
  margin-right: 24px;
  margin-left: 7px;
`;