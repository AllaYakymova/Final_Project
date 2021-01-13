import axios from 'axios'
import { takeEvery, put, call } from '@redux-saga/core/effects'
import {
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_PRODUCTS_ERROR,
  REQUEST_PRODUCTS_IN_PROCESS,
  FETCH_PRODUCTS
} from './../constants/constants'

// action creators
const getProductsSuccess = products => ({ type: REQUEST_PRODUCTS_SUCCESS, payload: [...products] })
const getProductsError = error => ({ type: REQUEST_PRODUCTS_ERROR, payload: error })
const getProductsInProcess = () => ({ type: REQUEST_PRODUCTS_IN_PROCESS })
export const fetchProducts = () => ({type: FETCH_PRODUCTS})

export function * watchFetchProducts () {
  yield takeEvery(fetchProducts, getProducts)
}

function * getProducts () {
  try {
    yield put(getProductsInProcess())
    const res = yield call(() => axios.get('http://localhost:5000/api/products'))
    yield put(getProductsSuccess(res.data))
  } catch (e) {
    yield put(getProductsError(e.message))
  }
}
