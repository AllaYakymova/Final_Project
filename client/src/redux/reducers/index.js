import { combineReducers } from '@reduxjs/toolkit';
import fetchProductsReducer from '../reducers/products/index'

export const rootReducer = combineReducers({
  products: fetchProductsReducer
})
