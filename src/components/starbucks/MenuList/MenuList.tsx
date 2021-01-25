import { GridList, Headline3 } from '@class101/ui';
import React from 'react';
import './MenuList.scss';
import MenuItem from './MenuItem';

interface MenuListProps {}

const menuList = [
  {
    product_name: '블랙 그레이즈드 라떼',
    id: 1,

    price: '6.1',
  },
  {
    product_name: '스타벅스 몰체 라떼',
    id: 2,

    price: '5.6',
  },
  {
    product_name: '카페모카',
    id: 3,
    price: '4.6',
  },
  {
    product_name: '카페 아메리카노',
    id: 4,
    price: '4.1',
  },
  {
    product_name: '시그니쳐 초콜렛',
    id: 5,
    price: '5.3',
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
