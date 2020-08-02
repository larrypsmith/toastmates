import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import ExitModalButton from '../common/ExitModalButton';
import Typography from '../common/Typography';

const AddItemToCartModal = ({ item, ...props }) => {
  const [quantity, setQuantity] = useState(1);
  
  return (
    <StyledAddItemToCartModal {...props}>
      <StyledForm>
        <FlexParent>
          <ModalItemImage src={item.imgUrl} />
          <ModalItemContent
            item={item}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </FlexParent>
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

const ModalItemContent = ({
  item,
  quantity,
  setQuantity,
  ...props
}) => (
  <StyledModalItemContent {...props}>
    <ItemDetails
      itemName={item.name}
      description={item.description}
      quantity={quantity}
      setQuantity={setQuantity}
    />
    {/* <CartControls /> */}
  </StyledModalItemContent>
);

const StyledModalItemContent = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const ItemDetails = ({
  itemName,
  description,
  quantity,
  setQuantity
}) => (
  <StyledItemDetails>
    <TopPaddingAndExitButton />
    <NameAndDescription itemName={itemName} description={description} />
    <QuantitySelector
      quantity={quantity}
      setQuantity={setQuantity}
    />
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
    <ExitModalButton />
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

const NameAndDescription = ({ itemName, description }) => (
  <StyledNameAndDescription>
    <NameTypography
      as='h2'
      size='24px'
      weight='600'
    > 
      {itemName}
    </NameTypography>
    <Typography
      as='p'
      size='16'
      color='secondary'
    >
      {description}
    </Typography>

  </StyledNameAndDescription>
);

const StyledNameAndDescription = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 37px;
  margin-bottom: 30px;
  position: relative;

  @media screen and (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media screen and (min-width: 1060px) {
    padding-top: 0px;
    margin-top: 0px;
  }
`;

const NameTypography = styled(Typography)`
  margin-bottom: 8px;
`;

const QuantitySelector = ({ quantity, setQuantity }) => {
  const decrementQuantity = (e) => {
    e.stopPropagation();
    setQuantity(quantity - 1);
  };

  const incrementQuantity = (e) => {
    e.stopPropagation();
    setQuantity(quantity + 1);
  };
  
  return (
    <StyledQuantitySelector>
      <StyledButton
        disabled={quantity <= 1}
        onClick={decrementQuantity}
      >
        -
      </StyledButton>
      <StyledTypography size='16px' weight='500'>
        {quantity}
      </StyledTypography>
      <StyledButton
        disabled={quantity >=  99}
        onClick={incrementQuantity}
      >
        +
      </StyledButton>
    </StyledQuantitySelector>
  )
};

const StyledQuantitySelector = styled.div`
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  width: 168px;
  max-width: 168px;
  height: 56px;
  color: rgb(45, 49, 56);
  margin: 36px auto;
  flex-shrink: 0;
  border: 1px solid rgba(217, 219, 224, 0.5);
  border-image: initial;
  border-radius: 100px;

  @media screen and (min-width: 1060px) {
    display: none;
  }
`;

const StyledTypography = styled(Typography)`
  width: 30px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 100%;
  width: calc(100% - 15px);
  font-size: 16px;
  font-weight: 500;

  ${({ disabled }) => (disabled && 
    css`
      color: rgb(180, 184, 193);
      pointer-events: none;
    `
  )}
`;