import { all } from '@redux-saga/core/effects';
import watchProductsSaga from './productsSaga';

export default function * rootSaga () {
  yield all([
    watchProductsSaga(),
  ]);
}
