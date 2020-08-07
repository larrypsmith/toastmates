import React from 'react';
import styled from 'styled-components/macro';
import Menu from './Menu';

const MenuList = ({ menus }) => {
  return (
    <MenusContainer>
      {menus.map(menu => (
        <Menu menu={menu} key={menu.id} />
      ))}
    </MenusContainer>
  )
};

export default MenuList;

const MenusContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  box-sizing: content-box;
  
  @media screen and (min-width: 1060px) {
    padding-bottom: 80px;
  }
`;