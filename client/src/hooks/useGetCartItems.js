import { gql, useQuery } from '@apollo/client';

const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;

const useGetCartItems = () => {
  return useQuery(GET_CART_ITEMS);
};

export default useGetCartItems;