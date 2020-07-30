import React from 'react';
import styled from 'styled-components/macro';
import ExitModalButton from '../common/ExitModalButton';

const AddItemToCartModal = ({ item, ...props }) => (
  <StyledAddItemToCartModal {...props}>
    <StyledForm>
      <FlexParent>
        <ModalItemImage src={item.imgUrl} />
        <ModalItemContent item={item} />
      </FlexParent>
    </StyledForm>
  </StyledAddItemToCartModal>
);

export default AddItemToCartModal;

const StyledAddItemToCartModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(255, 255, 255);
  overflow-y: scroll;
  box-shadow: rgba(34, 34, 34, 0.15) 0px 2px 20px 0px;
  height: 100%;
  width: 100%;
  
  @media screen and (min-width: 1060px) {
    height: 100%;
    width: 100%;
    max-height: 600px;
    max-width: 1060px;
    visibility: visible;
    overflow: hidden;
  }
`;

const StyledForm = styled.form`
  height: 100%;
`;

const FlexParent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 1059px) {
    overflow-y: scroll;
    height: calc(100% - 108px);
    border-bottom: 1px solid rgba(217, 219, 224, 0.5);
  }

  @media screen and (min-width: 1060px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const ModalItemImage = ({ src }) => (
  <StyledModalItemImage>
    <ImageDiv src={src}/>
    <PaddingDiv />
    <StyledExitModalButton />
  </StyledModalItemImage>
);

const StyledModalItemImage = styled.div`
  position: relative;
  background-color: transparent;
  height: auto;
  width: 100%;
  flex-shrink: 0;
  overflow: hidden;

  @media screen and (min-width: 1060px) {
    height: 100%;
    max-height: 600px;
    max-width: 600px;
  }
`;

const ImageDiv = styled.div`
  background-image: ${props => `url(${props.src})`};
  opacity: 1;
  position: absolute;
  background-size: cover;
  top: 0px;
  left: 0px;
  transform: scale(1);
  height: 100%;
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  transition: opacity 0.4s linear 0s;
`;

const PaddingDiv = styled.div`
  height: auto;
  padding-bottom: 100%;
`;

const StyledExitModalButton = styled(ExitModalButton)`
  position: absolute;
  left: 16px;
  top: 16px;
  z-index: 100000;
  color: rgb(255, 255, 255);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    left: 24px;
    top: 24px;
  }

  @media screen and (min-width: 1060px) {
    display: none;
  }
`;

const ModalItemContent = ({ item, ...props }) => (
  <StyledModalItemContent {...props}>
    <ItemDetails />
    <CartControls />
  </StyledModalItemContent>
);

const StyledModalItemContent = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const ItemDetails = () => (
  <StyledItemDetails>
    <TopPaddingAndExitButton />
    <NameAndDescription />
  </StyledItemDetails>  
);

const StyledItemDetails = styled.div`
  position: relative;
  height: 100%;

  @media screen and (min-width: 1060px) {
    height: calc(100% - 88px);
    overflow-y: auto;
    border-bottom: 1px solid rgba(217, 219, 224, 0.5);
  }
`;

const TopPaddingAndExitButton = () => (
  <StyledTopPaddingAndExitButton>
    
  </StyledTopPaddingAndExitButton>
);

const StyledTopPaddingAndExitButton = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  color: rgb(0, 0, 0);
  z-index: 100000;
  
  @media screen and (max-width: 1059px){
    display: none;
  }

  @media screen and (min-width: 1060px) {
    padding-left: 36px;
    padding-right: 36px;
  }
`;