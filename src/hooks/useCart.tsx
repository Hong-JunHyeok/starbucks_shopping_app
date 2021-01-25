import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'modules';

export default function useCart() {
  const cart = useSelector((state: RootState) => state.starbucks);
  return { cart };
}
