import { createSelector } from '@reduxjs/toolkit';

const productsState = state => state.products;

export const getProducts = createSelector(
  productsState,
  products => products.productsList
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

// filter products by category
export const getFilteredProducts = (category) => createSelector(
  productsState,
  products => products.productsList,
  products => products.currentPage,
  products => products.productsPerPage,
  (productsList, currentPage, productsPerPage) => {
    console.log(productsList, currentPage, productsPerPage);
    // const filteredProd = productsList.filter(item => item.categories === category);
    // const itemNo = filteredProd.map(item => item.itemNo);
    // const uniqueSet = new Set(itemNo)
    // const uniqueArr = [...uniqueSet];
    // let uniqueList = [];
    // uniqueArr.forEach((item) => {
    //   if (uniqueList.indexOf(item) === -1) {
    //     const res = productsList.find(prod => prod.itemNo === item)
    //     uniqueList = [...uniqueList, res]
    //   }
    // })
    // const indexOfLastProduct = currentPage * productsPerPage;
    // const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    // console.log(uniqueList.slice(indexOfFirstProduct, indexOfLastProduct));
    // return uniqueList.slice(indexOfFirstProduct, indexOfLastProduct);
  });
