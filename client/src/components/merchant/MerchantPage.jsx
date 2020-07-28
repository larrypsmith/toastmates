import React from 'react';
import styled from 'styled-components/macro';
import { gql, useQuery } from '@apollo/client';
import { useParams, useLocation, useRouteMatch } from 'react-router-dom';
import HeaderImage from './HeaderImage';

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

const MerchantPage = () => {
  const params = useParams();
  
  const { data } = useQuery(GET_MERCHANT, {
    variables: { id: params.id }
  })

  if (!data) return null;
  return (
    <React.Fragment>
      <HeaderImage src={data.merchant.imgUrl} />
    </React.Fragment>
  );
};

export default MerchantPage;

