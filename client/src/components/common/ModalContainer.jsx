import React from 'react';
import styled from 'styled-components/macro';
import ModalContent from './ModalContent';
import AuthModalContent from './AuthModalContent';

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

const ModalContainer = ({ isOpen }) => {
    if (!isOpen) return null; 

    return (
        <StyledModalContainer>
            <ModalContent>
                <AuthModalContent />
            </ModalContent>
        </StyledModalContainer>
    )
};

export default ModalContainer;