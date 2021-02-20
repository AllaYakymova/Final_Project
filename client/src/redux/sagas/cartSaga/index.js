import actionsWithCart from '../../actions/cart/';
import { apiRequestAction, apiRequestHandler } from '../../../api/requestSaga';
import { call, takeEvery } from '@redux-saga/core/effects';

function * onCreateCart (action) {
  const getCreateCartRequest = apiRequestAction({
    baseUrl: 'http://localhost:5000/api/cart',
    data: action.payload,
    method: 'POST',
    actionType: actionsWithCart.createCart,
  });
  yield call(apiRequestHandler, getCreateCartRequest);
}

// export const createCart = createAsyncThunk(
//   'cart/createCart',
//   async (cart) => {
//     const response = await client.post(process.env.REACT_APP_CART_API, { cart: cart })
//     console.log(response.cart)
//     return response.cart
//   }
// )

function * watchCartSaga () {
  yield takeEvery(actionsWithCart.createCart.request, onCreateCart);
}

export default watchCartSaga;
