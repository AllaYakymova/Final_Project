// export const cart = store => store.cart.cart;
// export const cartSum = store => store.cart.cartSum;
// export const order = store => store.cart.order;

import { createSelector } from '@reduxjs/toolkit';

const cartState = state => state.cart;

export const getCart = createSelector(
  cartState,
  cart => cart.cart
);
export const getLocalCart = createSelector(
  cartState,
  cart => cart.localCart
);

export const getCartSum = createSelector(
  cartState,
  cart => cart.cartSum
);
