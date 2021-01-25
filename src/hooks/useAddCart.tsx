import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addCart, StarbucksItem } from 'modules/starbucks';

export default function useAddCart(product_name: string, price: string) {
  const dispatch = useDispatch();

  const onAddCart = useCallback(() => dispatch(addCart(product_name, price)), [
    dispatch,
    product_name,
    price,
  ]);

  return onAddCart;
}
