import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import {number} from 'prop-types'
import { fetchProducts } from '../ProductsSlice'

export const createCart = createAsyncThunk(
  'cart/createCart',
  async (cart) => {
    const response = await axios.post(process.env.REACT_APP_CART_API, {
      body: cart,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log(response)
    return response.data
  },
)

// export const fetchOneProduct = createAsyncThunk(
//   'products/fetchProducts',
//   async (id) => {
//     const url = `${process.env.REACT_APP_PRODUCTS_API}/${id}`
//     const response = await axios.get(url)
//     return response.data
//   }
// )

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
    addProductToCart: (state, action
    ) => {
      const { item, sum } = action.payload
      state.cart = [...state.cart, item];
      state.cartSum = state.cartSum + sum
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

export const { addProductToCart } = cartSlice.actions;
