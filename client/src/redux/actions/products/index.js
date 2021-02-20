import { createAction } from '@reduxjs/toolkit';
import API from '../../constants/constants';
import { actionCreator } from '../actionCreator';

const actionsWithProducts = {
  fetchAllProducts: actionCreator(API.PRODUCTS.ACTIONS.FETCH_ALL_PRODUCTS),
  fetchFilteredProducts: actionCreator(API.PRODUCTS.ACTIONS.FETCH_FILTERED_PRODUCTS),
  fetchCatalog: actionCreator(API.PRODUCTS.ACTIONS.FETCH_CATALOG),
  setCurrentProducts: createAction(API.PRODUCTS.ACTIONS.CURRENT_PRODUCTS),
  setProductsPerPage: createAction(API.PRODUCTS.ACTIONS.PRODUCTS_PER_PAGE),
  setCurrentPage: createAction(API.PRODUCTS.ACTIONS.CURRENT_PAGE),
};

export default actionsWithProducts;
