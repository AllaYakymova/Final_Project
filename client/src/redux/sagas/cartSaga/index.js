import actionsWithCart from '../../actions/cart/'
import { apiRequestAction, apiRequestHandler } from '../../../api/requestSaga'
import { call, takeEvery } from '@redux-saga/core/effects'

function * onCreateCart (action) {
  const getCreateCartRequest = apiRequestAction({
    baseUrl: 'http://localhost:5000/api/cart',
    data: action.payload,
    method: 'POST',
    actionType: actionsWithCart.createCart,
  })
  yield call(apiRequestHandler, getCreateCartRequest)
}

function * onSentOrder (action) {

}
const newOrder = {
  customerId: '5d99ce196d40fb1b747bc5f5',
  deliveryAddress: {
    country: 'Ukraine',
    city: 'Kiev',
    address: 'Kreshchatic Street 56//A',
    postal: '01044',
  },
  shipping: 'Kiev 50UAH',
  paymentInfo: 'Credit card',
  status: 'not shipped',
  email: 'allegraja112@gmail.com',
  mobile: '+380630000000',
  letterSubject: 'Thank you for order! You are welcome!',
  letterHtml:
    '<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>',
}

function * watchCartSaga () {
  yield takeEvery(actionsWithCart.createCart.request, onCreateCart)
}

export default watchCartSaga
