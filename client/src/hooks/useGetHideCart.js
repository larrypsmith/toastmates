import { useQuery, gql } from '@apollo/client';

const GET_HIDE_CART = gql`
  query HideCart { 
    hideCart @client
  }
`;

const useGetHideCart = () => useQuery(GET_HIDE_CART);

export default useGetHideCart;