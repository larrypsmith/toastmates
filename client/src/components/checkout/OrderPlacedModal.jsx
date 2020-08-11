import React from 'react';
import styled from 'styled-components/macro';
import Overlay from '../common/Overlay';
import Typography from '../common/Typography';
import ExitModalButton from '../common/ExitModalButton';
import { modalVar } from '../../cache';
import { useHistory } from 'react-router-dom';

const OrderPlacedModal = ({ merchantName }) => {
  const history = useHistory();
  
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    modalVar(null);
    history.push('/feed');
  }
  
  return (
    <Overlay onClick={handleClick}>
      <StyledOrderPlacedModal>
        <StyledExitModalButton onClick={handleClick} />
        <StyledHeader as='h4'>
          Your order has been placed!
        </StyledHeader>
        <StyledParagraph size='14px' color='secondary'>
          Thank you for ordering from {merchantName}.
          You will be redirected to the feed page,
          where you can place another order.
        </StyledParagraph>
        <StyledButton onClick={handleClick}>
          Sounds good
        </StyledButton>
      </StyledOrderPlacedModal>
    </Overlay>
  );
};

export default OrderPlacedModal;

const StyledOrderPlacedModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(34, 34, 34, 0.15) 0px 2px 20px 0px;
  text-align: center;
  max-width: 460px !important;
  padding: 56px 32px 40px;
  overflow: visible !important;

  @media screen and (min-width: 1060px) {
    height: auto;
    max-width: 560px;
    max-height: 640px;
    visibility: visible;
    overflow: hidden;
  }
`;

const StyledExitModalButton = styled(ExitModalButton)`
  position: absolute;
  top: 16px;
  right: 16px;
`;

const StyledHeader = styled(Typography)`
  font-size: 22px;
  line-height: 28px;
  margin: 0px 0px 6px;
`;

const StyledParagraph = styled(Typography)`
  line-height: 22px;
  text-align: center;
  margin: 0px 20px 24px;
`;

const StyledButton = styled.button`
  width: 100%;
  letter-spacing: 1px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 48px;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
  background-color: rgb(0, 204, 153);
  color: rgb(255, 255, 255);
  margin: 0px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  border-radius: 32px;
  padding: 0px 24px;
  transition: all 0.2s ease-out 0s;
`;