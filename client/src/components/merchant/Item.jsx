import React from 'react';
import styled from 'styled-components/macro';

const Item = ({ item }) => (
  <ItemContainer>
    <ItemContentContainer>
      <NameAndDescriptionContainer>
        <ItemName>{item.name}</ItemName>
      </NameAndDescriptionContainer>
    </ItemContentContainer>
    {/* <ItemImage src={item.imgUrl} /> */}
  </ItemContainer>
);

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
    padding: 20px 20px 128px 15px;
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