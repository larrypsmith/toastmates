import React from 'react';
import styled from 'styled-components/macro';
import Button from './Button';
import useLogin from '../../hooks/useLogin';
import useCloseModal from '../../hooks/useCloseModal';

const DemoUserButton = () => {
  const login = useLogin();
  const closeModal = useCloseModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    login('johndoe@mail.com', 'password');
    closeModal();
  };

  return (
    <StyledButton type='button' onClick={handleSubmit}>
      Log in as demo user
    </StyledButton>
  )
};

export default DemoUserButton;

const StyledButton = styled(Button)`
  margin-top: 30px;
  color: ${props => props.theme.palette.primary.main};
  background-color: transparent;
  border: ${props => '1px solid ' + props.theme.palette.primary.main};

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;