import { modalVar } from '../cache';

const useOpenModal = (modalComponent) => {
  const openModal = (e) => {
    e.preventDefault();
    modalVar(modalComponent);
  };

  return openModal;
};

export default useOpenModal;