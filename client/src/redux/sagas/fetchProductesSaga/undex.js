// import axios from 'axios'
// import { takeEvery, put, call } from '@redux-saga/core/effects'
// import { getProductsInProcess, getProductsSuccess, getProductsError } from '../../actions/products'
// import { FETCH_PRODUCTS } from '../../constants/constants'
//
// function * getProducts () {
//   try {
//     yield put(getProductsInProcess())
//     const res = yield call(() => axios.get('http://localhost:5000/api/products'))
//     yield put(getProductsSuccess(res.data))
//   } catch (e) {
//     yield put(getProductsError(e.message))
//   }
// }
//
// export function * watchFetchProducts () {
//   yield takeEvery(FETCH_PRODUCTS, getProducts)
// }
