import { useApolloClient } from '@apollo/client';

const useOpenModal = (modal) => {
  const client = useApolloClient();

  const openModal = (e) => {
    e.preventDefault();
    client.writeData({ data: { modal } })
  };

  return openModal;
};

export default useOpenModal;