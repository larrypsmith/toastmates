import React from 'react';
import styled from 'styled-components/macro';
import ModalContainer from './ModalContainer';
import useQueryModal from '../../hooks/useQueryModal';

const ModalRoot = () => {
  const modalComponent = useQueryModal();
  const isOpen = Boolean(modalComponent);

  if (!isOpen) return null;
  return (
    <StyledModalRoot isOpen={isOpen}>
      <div>
        <ModalContainer modalComponent={modalComponent} />
      </div>
    </StyledModalRoot>
  );
};

export default ModalRoot;

const StyledModalRoot = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${props => props.isOpen ? '100%' : 0};
  width: ${props => props.isOpen ? '100%' : 0};
  background-color: ${props => props.isOpen ? 'rgba(255, 255, 255, 0.63)' : 'transparent'};
  transition: background-color 100ms ease-in-out;
  z-index: 1000;
`;