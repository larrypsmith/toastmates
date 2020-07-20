import { modalVar } from '../cache';

const useOpenModal = (modal) => {
  const openModal = (e) => {
    e.preventDefault();
    modalVar(modal);
  };

  return openModal;
};

export default useOpenModal;