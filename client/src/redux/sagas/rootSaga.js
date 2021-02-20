import { all } from '@redux-saga/core/effects';
import watchProductsSaga from './productsSaga';
import watchCartSaga from './cartSaga';

export default function * rootSaga () {
  yield all([
    watchProductsSaga(),
    watchCartSaga()
  ]);
}
