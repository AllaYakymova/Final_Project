import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const createCart = createAsyncThunk(
  'cart/createCart',
  async () => {
    const response = await axios.post(process.env.REACT_APP_CART_API, [])
    return response.data
  }
)

// let [u1, u2] = await Promise.all([
//   axios.get('https://api.github.com/users/janbodnar'),
//   axios.get('https://api.github.com/users/symfony')
// ]);
//
// console.log(`Jan Bodnar: ${u1.data.created_at}`);
// console.log(`Symfony: ${u2.data.created_at}`);

export const cartSlice = createSlice({
  name: 'products',
  initialState: {
    cart: [],
    status: 'idle',
    error: null
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
    }
  }
})
