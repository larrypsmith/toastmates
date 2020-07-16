import React from 'react';
import styled from 'styled-components/macro';
import useOpenModal from '../../hooks/useOpenModal';
import Typography from './Typography';

const StyledNavigationButton = styled.button`
  height: 32px;
  padding: 0 16px;
  border-radius: 16px;
  color: ${props => props.theme.palette.common.black};
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.15);
  min-width: 86px;
  font-weight: 700;
  letter-spacing: .5px;
  overflow: hidden;
  cursor: pointer;
`;

const NavigationButton = ({ children, modal, className }) => {
  const openModal = useOpenModal(modal);

  return (
    <StyledNavigationButton className={className} onClick={openModal}>
      <Typography size='12px' uppercase>
        {children}
      </Typography>
    </StyledNavigationButton>
  )
};

export default NavigationButton;