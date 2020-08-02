import React from 'react';
import styled from 'styled-components/macro';
import useCloseModal from '../../hooks/useCloseModal';

const ModalContainer = ({ modalComponent: Component }) => {
    const closeModal = useCloseModal();

    const onClick = (e) => {
        if (e.currentTarget === e.target) {
            closeModal();
        }
    };
    
    return (
        <StyledModalContainer onClick={onClick}>
            <Component />
        </StyledModalContainer>
    )
};

export default ModalContainer;

const StyledModalContainer = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
    z-index: 1100;
    transform: translateY(0%);
    transition: transform 200ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
`;
