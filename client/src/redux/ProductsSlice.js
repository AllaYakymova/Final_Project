import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get(process.env.REACT_APP_PRODUCTS_API, {
      params: {
        results: 1,
        inc: []
      }
    })
    return response.data
  }
)
export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle',
    error: null
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.products = action.payload
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
})
