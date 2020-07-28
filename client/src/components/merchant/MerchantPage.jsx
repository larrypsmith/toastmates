import React from 'react';
import styled from 'styled-components/macro';
import { gql, useQuery } from '@apollo/client';
import { withRouter } from 'react-router-dom';

const GET_MERCHANT = gql`
  query GetMerchant($id: ID!) {
    merchant(id: $id) {
      name,
      address,
      deliveryFee,
      deliveryTime {
        low,
        high
      }
      menus {
        name
      }
      imgUrl
    }
  }
`;

const MerchantPage = ({ match }) => {
  const { data } = useQuery(GET_MERCHANT, {
    variables: { id: match.params.id },
    errorPolicy: 'all'
  })

  if (!data) return null;
  return (
    <div>
      {data.merchant.name}
    </div>
  );
};

export default withRouter(MerchantPage);