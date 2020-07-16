import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const MODAL = gql`
  query modal {
    modal @client
  }
`;

const useQueryModal = () => {
  const { data } = useQuery(MODAL);
  return data.modal || null;
};

export default useQueryModal;