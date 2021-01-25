import React from 'react';
import './CartItem.scss';
import { StarbucksItem } from 'modules/starbucks';
import { Body1, Subtitle1 } from '@class101/ui';

const CartItem = ({ id, product_name, price }: StarbucksItem) => {
  const handleClick = (id: number) => {
    console.log(id);
  };
  return (
    <>
      <div className="CartItem" onClick={() => handleClick(id)}>
        <Subtitle1>{product_name}</Subtitle1>
        <Body1 color="green">{price}</Body1>
      </div>
    </>
  );
};

export default CartItem;
