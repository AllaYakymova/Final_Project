import { all } from '@redux-saga/core/effects';
import {watchFetchProducts} from './fetchProductesSaga/';

export default function * rootSaga () {
  yield all([
    watchFetchProducts(),
  ]);
}
