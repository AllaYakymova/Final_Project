import { createSelector } from '@reduxjs/toolkit';

const productsState = state => state.products;

export const getProducts = createSelector(
  productsState,
  products => products.products
);
export const getCollection = createSelector(
  productsState,
  products => products.catalogList
);
export const getCurrentProducts = createSelector(
  productsState,
  products => products.currentProducts
);
export const getCurrentPage = createSelector(
  productsState,
  products => products.currentPage
);
export const getProductsPerPage = createSelector(
  productsState,
  products => products.productsPerPage
);
