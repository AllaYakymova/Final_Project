import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from '../reducers/products/';
import cartReducer from '../reducers/cart/'

export const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
})
