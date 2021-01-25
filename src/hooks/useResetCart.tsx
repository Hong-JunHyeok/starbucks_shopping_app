import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { resetCart, StarbucksItem } from 'modules/starbucks';

export default function useResetCart() {
  const dispatch = useDispatch();

  const onResetCart = useCallback(() => dispatch(resetCart()), [dispatch]);

  return onResetCart;
}
