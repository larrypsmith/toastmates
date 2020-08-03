import React, { useState } from 'react';
import styled from 'styled-components/macro';
import MobileCartControls from './MobileCartControls';
import ModalItemContent from './ModalItemContent';
import ModalItemImage from './ModalItemImage';

const AddItemToCartModal = ({ item, ...props }) => {
  const [quantity, setQuantity] = useState(1);
  
  return (
    <StyledAddItemToCartModal item={item} {...props}>
      <StyledForm>
        <FlexParent>
          <ModalItemImage src={item.imgUrl} />
          <ModalItemContent
            item={item}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </FlexParent>
        <MobileCartControls item={item} quantity={quantity} />
      </StyledForm>
    </StyledAddItemToCartModal>
  );
};

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
    max-height: 600px;
    max-width: ${props => (props.item && props.item.imgUrl)
      ? '1060px'
      : '524px'
    };
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