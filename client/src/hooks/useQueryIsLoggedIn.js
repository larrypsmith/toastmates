import { useQuery, gql } from '@apollo/client';

const IS_LOGGED_IN = gql`
  query isLoggedIn {
    isLoggedIn @client
  }
`;

const useQueryIsLoggedIn = () => {
  const { data } = useQuery(IS_LOGGED_IN);
  return data.isLoggedIn;
};

export default useQueryIsLoggedIn;