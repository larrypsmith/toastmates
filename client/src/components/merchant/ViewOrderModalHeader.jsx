import React from 'react';
import styled from 'styled-components/macro';
import ExitModalButton from '../common/ExitModalButton';

const ViewOrderModalHeader = () => (
  <StyledViewOrderModalHeader>
    <StyledContainer>
      <ContentContainer>
        <ExitModalButton />
      </ContentContainer>
    </StyledContainer>
  </StyledViewOrderModalHeader>
);

export default ViewOrderModalHeader;

const StyledViewOrderModalHeader = styled.div`
  position: relative;
`;

const StyledContainer = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
`;

const ContentContainer = styled.div`
  color: rgb(0, 0, 0);
  cursor: pointer;
  display: flex;
  align-items: center;
`;