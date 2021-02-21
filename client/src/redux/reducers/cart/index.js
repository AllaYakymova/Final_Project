import { createReducer } from '@reduxjs/toolkit';
import actionsWithCart from '../../actions/cart/'

const initialState = {
  cart: [],
  localCart: [],
  cartSum: 0,
  status: 'idle',
  error: null,
};

const cartReducer = createReducer(initialState, {
  [actionsWithCart.createCart.start]: (state) => {
    state.status = 'loading';
  },
  [actionsWithCart.createCart.success]: (state, action) => {
    state.status = 'succeeded';
    state.cart = action.payload;
  },
  [actionsWithCart.createCart.error]: (state, action) => {
    state.status = 'failed';
    state.error = action.payload;
  },
  [actionsWithCart.createLocalCart]: (state, action) => {
    state.localCart = action.payload;
  },
  [actionsWithCart.addProductToCart]: (state, action) => {
    state.localCart = [...state.localCart, action.payload];
  },
  [actionsWithCart.setCartSum]: (state, action) => {
    state.cartSum = action.payload;
  },
  [actionsWithCart.increaseProductInCart]: (state, action) => {
    state.localCart = action.payload;
  },
  [actionsWithCart.reduceProductInCart]: (state, action) => {
    state.localCart = action.payload;
  },
  [actionsWithCart.removeProductFromCart]: (state, action) => {
    const { cart, sum } = action.payload
    state.localCart = cart;
    state.cartSum = state.cartSum - sum
  },
})

export default cartReducer
