import React from 'react';
import styled from 'styled-components/macro';
import { modalVar } from '../../cache';
import ItemImage from './ItemImage';
import Typography from '../common/Typography';
import AddItemToCartModal from './AddItemToCartModal';

const Item = ({ item }) => {
  const handleClick = (e) => {
    e.preventDefault();

    const Component = () => (
      <AddItemToCartModal item={item} />
    );

    modalVar(Component);
  };
  
  return (
    <ItemContainer onClick={handleClick}>
      <ItemContentContainer>
        <NameAndDescriptionContainer>
          <ItemName>{item.name}</ItemName>
          <ItemDescription>{item.description}</ItemDescription>
        </NameAndDescriptionContainer>
        <StyledTypography
          size='13px'
          color='primary'
        >
          ${item.price.toFixed(2)}
        </StyledTypography>
      </ItemContentContainer>
      <ItemImage src={item.imgUrl} />
      <Padding />
    </ItemContainer>
  );
};

export default Item;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  padding: 16px 0;
  border-top: 1px solid rgba(217,219,224,0.5);
  box-sizing: content-box;
  height: 128px;
  position: relative;

  @media screen and (min-width: 1060px) {
    width: calc(50% - 17.5px);
    margin: 16px 0;
    padding: 0;
    border: 1px solid rgba(217,219,224,0.5);
    height: 128px;
  }
`;

const ItemContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  padding: 9px 0;

  @media screen and (min-width: 1060px) {
    justify-content: space-between;
    padding-right: 128px;
    padding: 20px 20px 15px;
  }
`;

const NameAndDescriptionContainer = styled.div`
  overflow: hidden;
  margin-right: 10px;
`;

const ItemName = styled.h3`
  @media screen and (max-width: 767px) {
    line-clamp: 2;
    text-overflow: initial;
    white-space: normal;
  }

  font-size: 16px;
  font-weight: 500;
  overflow: hidden;
  margin: 0 0 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledTypography = styled(Typography)`
  line-height: 20px;
`;

const ItemDescription = styled.div`
  font-size: 14px;
  letter-spacing: 0.14px;
  font-weight: 400;
  color: rgba(143, 149, 163, 0.9);
  margin-bottom: 5px;
  overflow: hidden;
`;

const Padding = styled.div`
  opacity: 0;
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: flex-end;
  width: 128px;
  transition: opacity 0.1s ease-in-out 0s;
  padding: 16px;
`;