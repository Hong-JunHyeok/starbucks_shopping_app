import React from 'react';
import './CartItem.scss';
import { StarbucksItem } from 'modules/starbucks';
import { Body1, Subtitle1 } from '@class101/ui';
import { CloseCircleOutline } from '@class101/ui/dist/esm/Icon';
import useRemove from 'hooks/useRemoveCart';

const CartItem = ({ id, product_name, price }: StarbucksItem) => {
  const onRemove = useRemove();
  const handleClick = (id: number) => {
    onRemove(id);
  };
  return (
    <>
      <div className="CartItem" onClick={() => handleClick(id)}>
        <Subtitle1>{product_name}</Subtitle1>
        <Body1 color="green">{price}</Body1>
        <CloseCircleOutline fillColor="#FC515A" className="CartItem-icon" />
      </div>
    </>
  );
};

export default CartItem;
