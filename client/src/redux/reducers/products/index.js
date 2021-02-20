import { createReducer } from '@reduxjs/toolkit';
import actionsWithProducts from '../../actions/products/';

const initialState = {
  products: [],
  catalogList: [],
  currentProducts: [],
  currentPage: 1,
  productsPerPage: 15,
  status: 'idle',
  error: null,
};

const productsReducer = createReducer(initialState, {
  [actionsWithProducts.fetchFilteredProducts.start]: (state) => {
    state.status = 'loading';
  },
  [actionsWithProducts.fetchFilteredProducts.success]: (state, action) => {
    state.status = 'succeeded';
    state.products = action.payload;
  },
  [actionsWithProducts.fetchFilteredProducts.error]: (state, action) => {
    state.status = 'failed';
    state.error = action.payload;
  },
  [actionsWithProducts.fetchCatalog.start]: (state) => {
    state.status = 'loading';
  },
  [actionsWithProducts.fetchCatalog.success]: (state, action) => {
    state.status = 'succeeded';
    state.catalogList = action.payload.map(item => item.name);
  },
  [actionsWithProducts.fetchCatalog.error]: (state, action) => {
    state.status = 'failed';
    state.error = action.payload;
  },
  [actionsWithProducts.setCurrentProducts]: (state, action) => {
    state.currentProducts = action.payload;
  },
  [actionsWithProducts.setCurrentPage]: (state, action) => {
    state.currentPage = action.payload;
  },
  [actionsWithProducts.setProductsPerPage]: (state, action) => {
    state.productsPerPage = action.payload;
  }
});

export default productsReducer;
