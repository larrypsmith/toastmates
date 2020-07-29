import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import HeaderImage from './HeaderImage';
import MerchantNavigation from './MerchantNavigation';
import MerchantPageContent from './MerchantPageContent';

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
        id
        name
        items {
          id
          name
          description
          price
        }
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
      <MerchantNavigation />
      <HeaderImage src={data.merchant.imgUrl} />
      <MerchantPageContent merchant={data.merchant} />
    </React.Fragment>
  );
};

export default MerchantPage;