import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { client } from '../../utilities/api_client'

export const createCart = createAsyncThunk(
  'cart/createCart',
  async (cart) => {
    const response = await client.post(process.env.REACT_APP_CART_API, { cart: cart })
    console.log(response.cart)
    return response.cart
  }
)

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    cartSum: 0,
    // order: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addProductToCart: (state, action) => {
      state.cart = action.payload;
    },
    setCartSum: (state, action) => {
      state.cartSum = action.payload
    },
    reduceProductInCart: (state, action) => {
      state.cart = action.payload;
    },
    removeProductFromCart: (state, action) => {
      const { cart, sum } = action.payload
      state.cart = cart;
      state.cartSum = state.cartSum - sum
    },
    createOrder: (state, action) => {
      state.order = action.payload;
    },
  },
  extraReducers: {
    [createCart.pending]: (state) => {
      state.status = 'loading'
    },
    [createCart.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.products = action.payload
    },
    [createCart.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  },
})

export const { addProductToCart, reduceProductInCart, setCartSum, removeProductFromCart } = cartSlice.actions;
