import React from 'react';
import styled from 'styled-components/macro';
import MenuItems from './MenuItems';
import Typography from '../common/Typography';

const Menu = ({ menu }) => (
  <MenuContainer>
    <MenuName as='h2'>
      {menu.name}
    </MenuName>
    <MenuItems items={menu.items} />
  </MenuContainer>
);

export default Menu;

const MenuContainer = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 16px;
  padding-bottom: 16px;
  width: 100%;
  background-color: #fff;

  &:first-child {
    margin-top: 0;
  }

  @media screen and (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media screen and (min-width: 1060px) {
    padding: 0;
    margin-top: 0;

    &:first-child {
      padding-top: 32px;
    }
  }
`;

const MenuName = styled(Typography)`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 18px;
  font-weight: 600;
  padding-top: 16px;
  padding-bottom: 16px;

  @media screen and (min-width: 1060px) {
    font-size: 21px;
    line-height: normal;
    border-bottom: 1px solid rgba(217,219,224,0.5);
    padding-top: 32px;
  }
`;