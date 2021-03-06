import { modalVar } from '../cache';

const useCloseModal = () => {
  const closeModal = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    modalVar(null);
  }

  return closeModal;
}

export default useCloseModal;