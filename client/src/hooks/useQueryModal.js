import { useQuery, gql } from '@apollo/client';

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