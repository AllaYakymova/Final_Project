import actionsWithProducts from '../../actions/products/';
import { apiRequestAction, apiRequestHandler } from '../../../api/requestSaga';
import { call, takeEvery } from '@redux-saga/core/effects'

function * onGetProducts () {
  const getProductsRequest = apiRequestAction({
    baseUrl: 'http://localhost:5000/api/products',
    actionType: actionsWithProducts.fetchFilteredProducts,
  });
  yield call(apiRequestHandler, getProductsRequest);
}

function * onGetCatalog () {
  const getCatalogRequest = apiRequestAction({
    baseUrl: 'http://localhost:5000/api/catalog',
    actionType: actionsWithProducts.fetchCatalog,
  });
  yield call(apiRequestHandler, getCatalogRequest);
}

function * watchProductsSaga () {
  yield takeEvery(actionsWithProducts.fetchFilteredProducts.request, onGetProducts);
  yield takeEvery(actionsWithProducts.fetchCatalog.request, onGetCatalog)
}

export default watchProductsSaga;
