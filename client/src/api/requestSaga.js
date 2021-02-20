import { call, put } from '@redux-saga/core/effects';
import client from './client';

export const apiRequestAction = ({ baseUrl, query, data, method, isAuth, actionType }) => {
  return {
    request: {
      baseUrl: baseUrl,
      query: query,
      data: data,
      config: {
        method: method || 'GET',
        isAuth: isAuth,
      },
    },
    dispatchAction: actionType,
  };
};

export function * apiRequestHandler (requestAction) {
  const { request, dispatchAction } = requestAction;
  try {
    yield put(dispatchAction.start());
    const response = yield call(() => client({
      baseURL: request.baseUrl,
      query: request.query,
      isAuth: request.config.isAuth,
      token: request.config.token,
      method: request.config.method,
      data: request.data,
    }));
    yield put(dispatchAction.success(response));
  } catch (e) {
    yield put(dispatchAction.error(e.message));
  }
}
