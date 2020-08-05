import React from 'react';
import styled from 'styled-components/macro';
import { gql, useQuery } from '@apollo/client';
import { useRouteMatch } from 'react-router-dom';
import ExitModalButton from '../common/ExitModalButton';
import SoundsGoodButton from './SoundsGoodButton';
import Typography from '../common/Typography';
import Cart from '../../Cart';

const GET_MERCHANT = gql`
  query GetMerchant($id: ID!) {
    merchant(id: $id) {
      id
      name
    }
  }
`;

const ConfirmCartChangeModal = ({ item, quantity }) => {
  const currentCartMerchantId = Cart.getMerchant();

  const {
    loading: oldLoading,
    error: oldError,
    data: oldData
  } = useQuery(GET_MERCHANT, {
    variables: {
      id: currentCartMerchantId
    }
  });

  const match = useRouteMatch();
  const newCartMerchantId = match.params.id;

  const {
    loading: newLoading,
    error: newError,
    data: newData
  } = useQuery(GET_MERCHANT, {
    variables: {
      id: newCartMerchantId
    }
  });

  if (oldError) throw new Error(oldError.message);
  if (newError) throw new Error(newError.message);
  if (oldLoading || newLoading) return null;

  return (
    <ConfirmCartChangeModalContainer>
      <StyledExitModalButton />
      <StyledHeader as='h4'>
        Start a new cart?
      </StyledHeader>
      <StyledParagraph size='14px' color='secondary'>
        You currently have items in your cart from&nbsp;
        {oldData.merchant.name}. Would you like to clear the
        cart and add new items from {newData.merchant.name}?
      </StyledParagraph>
      <SoundsGoodButton
        item={item}
        quantity={quantity} 
        merchantId={newData.merchant.id}
      />
    </ConfirmCartChangeModalContainer>
  );
};

export default ConfirmCartChangeModal;

const ConfirmCartChangeModalContainer = styled.div`
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