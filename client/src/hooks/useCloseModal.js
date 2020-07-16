import { useApolloClient } from '@apollo/react-hooks';

const useCloseModal = () => {
  const client = useApolloClient();

  const closeModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    client.writeData({ data: { modal: null } });
  }

  return closeModal;
}

export default useCloseModal;