import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { productsSlice } from './ProductsSlice'
import { cartSlice } from './cartSlice'

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production'
})

export default store
