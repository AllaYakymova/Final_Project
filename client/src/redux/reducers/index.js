import {combineReducers} from 'redux';
import { REQUEST_PRODUCTS_SUCCESS, REQUEST_PRODUCTS_ERROR, REQUEST_PRODUCTS_IN_PROCESS } from './../constants/constants';

const initialStore = {
  products: [],
  isLoaded: false,
  error: '',
};

const getProductsReducer = (store = initialStore, action) => {
  switch (action.type) {
    case REQUEST_PRODUCTS_SUCCESS:
      return {
        ...store,
        isLoaded: true,
        products: action.payload,
      };
    case REQUEST_PRODUCTS_ERROR:
      return {
        ...store,
        isLoaded: false,
        error: action.payload
      };
    case REQUEST_PRODUCTS_IN_PROCESS:
      return {
        ...store,
        isLoaded: false,
      };
    default:
      return store;
  }
};

export const rootReducer = combineReducers({
  getProducts: getProductsReducer
});
