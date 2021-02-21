import { createAction } from '@reduxjs/toolkit';
import { actionCreator } from '../actionCreator'
import API from '../../constants/constants'

const actionsWithCart = {
  createCart: actionCreator(API.CART.ACTIONS.CREATE_CART),
  fetchCartProducts: actionCreator(API.CART.ACTIONS.FETCH_CART_PRODUCTS),
  createLocalCart: createAction(API.CART.ACTIONS.CREATE_LOCAL_CART),
  addProductToCart: createAction(API.CART.ACTIONS.ADD_PRODUCT),
  increaseProductInCart: createAction(API.CART.ACTIONS.INCREASE_PRODUCT_AMOUNT),
  reduceProductInCart: createAction(API.CART.ACTIONS.REDUCE_PRODUCT_AMOUNT),
  removeProductFromCart: createAction(API.CART.ACTIONS.REMOVE_PRODUCT),
  setCartSum: createAction(API.CART.ACTIONS.SET_CART_SUM),
};
export default actionsWithCart
