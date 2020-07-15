import { useApolloClient } from '@apollo/react-hooks';

const useOpenModal = (modal) => {
  const client = useApolloClient();

  const openModal = (e) => {
    e.preventDefault();
    client.writeData({ data: { modal } })
  };

  return openModal;
};

export default useOpenModal;