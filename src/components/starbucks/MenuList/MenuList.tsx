import { GridList, Headline3 } from '@class101/ui';
import React from 'react';
import './MenuList.scss';
import MenuItem from './MenuItem';

interface MenuListProps {}

const menuList = [
  {
    product_name: '블랙 그레이즈드 라떼',
    id: 1,
    img: 'assets/starbucks.png',
    price: '6.1',
  },
  {
    product_name: '스타벅스 몰체 라떼',
    id: 2,
    img: 'assets/starbucks.png',
    price: '5.6',
  },
];

const MenuList = ({}: MenuListProps) => {
  return (
    <div className="MenuList">
      <Headline3>메뉴판</Headline3>
      <div className="MenuList-items">
        <GridList items={menuList} renderItem={MenuItem} smColumn={1} />
      </div>
    </div>
  );
};

export default MenuList;
