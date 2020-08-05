import React from 'react';
import styled from 'styled-components/macro';
import { gql, useQuery } from '@apollo/client';
import { cartMerchantVar, modalVar } from '../../cache';
import useResponsiveWindowWidth from '../../hooks/useResponsiveWindowWidth';
import CartItemsList from './CartItemsList';
import CheckoutButton from './CheckoutButton';
import Subtotal from './Subtotal';

const GET_MERCHANT = gql`
  query GetMerchant($id: ID!) {
    merchant(id: $id) {
      id
      name
    }
  }
`;

const ViewOrderModalContent = () => {
  const windowWidth = useResponsiveWindowWidth();
  const merchantId = cartMerchantVar();
  
  const { error, data } = useQuery(GET_MERCHANT, {
    variables: {
      id: merchantId
    }
  })

  if (error) throw new Error(error.message);
  if (!data) return null;
  if (windowWidth > 1060) modalVar(null);

  return(
    <div>
      <Container>
        <HeadingText as='h2'>
          <span>
            Order from {data.merchant && data.merchant.name}
          </span>
        </HeadingText>
      </Container>
      <CartItemsList />
      <Subtotal />
      <CheckoutButton />
    </div>
  );
};

export default ViewOrderModalContent;

const Container = styled.div`
  padding-left: 16px;
  padding-right: 16px;
`;

const HeadingText = styled.div`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 24px;
  font-weight: 600;
  line-height: normal;
  padding-top: 20px;
  padding-bottom: 16px;
`;