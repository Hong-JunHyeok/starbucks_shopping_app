import React from 'react';
import CartItem from 'components/starbucks/CartList/CartItem';
import { useSelector } from 'react-redux';
import { RootState } from 'modules';

export default function useCart() {
  const cart = useSelector((state: RootState) => state.starbucks);
  let total = 0;
  cart.forEach((item) => (total += Number(item.price)));
  const cartList = cart.map((item) => (
    <CartItem
      id={item.id}
      product_name={item.product_name}
      price={item.price}
    />
  ));
  return { cartList, total };
}
