import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addCart, StarbucksItem } from 'modules/starbucks';

export default function useAddCart(
  id: number,
  product_name: string,
  price: string
) {
  const dispatch = useDispatch();

  const onAddCart = useCallback(
    () => dispatch(addCart(id, product_name, price)),
    [dispatch, id, product_name, price]
  );

  return onAddCart;
}
