import React from 'react';
import styled from 'styled-components/macro';
import Item from './Item';

const MenuItems = ({ items }) => (
  <ItemsContainer>
    {items.map(item => (
      <Item item={item} key={item.id} />
    ))}
  </ItemsContainer>
);

export default MenuItems;

const ItemsContainer = styled.div`
  box-sizing: border-box;

  @media screen and (min-width: 1060px) {
    padding-top: 16px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
  }
`;