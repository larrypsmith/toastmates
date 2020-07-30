import styled from 'styled-components/macro'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import useCloseModal from '../../hooks/useCloseModal';

const ExitModalButton = (props) => {
  const closeModal = useCloseModal();
  
  return (
    <ExitModalButtonContainer onClick={closeModal} {...props}>
      <FontAwesomeIcon icon={faTimes} size="lg" />
    </ExitModalButtonContainer>
  );
};

export default ExitModalButton;

const ExitModalButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 16px;
  display: flex;
  height: 24px;
  width: 24px;
  margin-right: 14px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 28px;
    left: initial;
    right: 12px;
  }
`;