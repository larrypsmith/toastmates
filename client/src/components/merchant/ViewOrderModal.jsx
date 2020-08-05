import React from 'react';
import styled from 'styled-components/macro';
import ViewOrderModalContent from './ViewOrderModalContent';
import ViewOrderModalHeader from './ViewOrderModalHeader';

const ViewOrderModal = () => {
  return (
    <StyledViewOrderModal>
      <StyledDiv>
        <FlexParent>
          <ViewOrderModalHeader />
          <ViewOrderModalContent />
        </FlexParent>
      </StyledDiv>
    </StyledViewOrderModal>
  );
};

export default ViewOrderModal;

const StyledViewOrderModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  background-color: rgb(255, 255, 255);
  overflow-y: scroll;
  box-shadow: rgba(34, 34, 34, 0.15) 0px 2px 20px 0px;
`;

const StyledDiv = styled.div`
  height: 100%;
`;

const FlexParent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 56px;
`;