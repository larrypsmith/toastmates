import styled from 'styled-components/macro'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import useCloseModal from '../../hooks/useCloseModal';

const ExitModalButton = (props) => {
  const closeModal = useCloseModal();
  
  return (
    <div onClick={closeModal} {...props}>
      <FontAwesomeIcon icon={faTimes} size="lg" />
    </div>
  );
};

export default ExitModalButton;