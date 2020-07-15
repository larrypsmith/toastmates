import React from 'react';
import styled, { css } from 'styled-components/macro';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const MODAL = gql`
  query modal {
    modal @client
  }
`;

const ModalRoot = ({ children }) => {
  const { data } = useQuery(MODAL);
  const isOpen = Boolean(data.modal);

  return (
    <StyledModalRoot isOpen={isOpen}>
      {children}
    </StyledModalRoot>
  );
};


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

export default ModalRoot;