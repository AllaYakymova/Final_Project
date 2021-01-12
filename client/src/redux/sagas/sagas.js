// import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { REQUEST_PRODUCTS_SUCCESS, REQUEST_PRODUCTS_ERROR, REQUEST_PRODUCTS_IN_PROCESS } from './../constants/constants';
import axios from 'axios';

const getProductsSuccess = products => ({ type: REQUEST_PRODUCTS_SUCCESS, payload: [...products] });
const getProductsError = error => ({ type: REQUEST_PRODUCTS_ERROR, payload: error});
const getProductsInProcess = () => ({ type: REQUEST_PRODUCTS_IN_PROCESS });

const getProducts = () => {
  return (dispatch) => {
    dispatch(getProductsInProcess());
    axios.get('')
      .then(res => {
        dispatch(getProductsSuccess(res.data))
      })
      .catch(e => {
        dispatch(getProductsError(e.message))
      })
  }
}

export default getProducts;
// eslint-disable-next-line require-yield
export function * helloSaga () {
  console.log('Hello Sagas!')
}
