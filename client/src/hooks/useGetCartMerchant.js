import { gql, useQuery } from '@apollo/client';

const GET_CART_MERCHANT = gql`
  query GetCartMerchant {
    cartMerchant @client
  }
`;

const useGetCartMerchant = () => {
  return useQuery(GET_CART_MERCHANT);
};

export default useGetCartMerchant;