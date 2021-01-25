import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { removeCart, StarbucksItem } from 'modules/starbucks';

export default function useRemoveCart() {
  const dispatch = useDispatch();

  const onRemoveCart = useCallback((id: number) => dispatch(removeCart(id)), [
    dispatch,
  ]);

  return onRemoveCart;
}
