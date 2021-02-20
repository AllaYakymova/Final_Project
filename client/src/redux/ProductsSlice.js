// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'
//
// export const fetchProducts = createAsyncThunk(
//   'products/fetchProducts',
//   async () => {
//     const response = await axios.get(process.env.REACT_APP_PRODUCTS_API)
//     return response.data
//   }
// )
//
// export const fetchCatalog = createAsyncThunk(
//   'products/fetchCatalog',
//   async () => {
//     const response = await axios.get(process.env.REACT_APP_CATALOG_API, {
//       headers: {
//         'Content-Type': 'application/json',
//       }
//     })
//     return response.data.map(item => item.name)
//   }
// )
//
// export const productsSlice = createSlice({
//   name: 'products',
//   initialState: {
//     products: [],
//     catalogList: [],
//     status: 'idle',
//     error: null
//   },
//   extraReducers: {
//     [fetchProducts.pending]: (state) => {
//       state.status = 'loading'
//     },
//     [fetchProducts.fulfilled]: (state, action) => {
//       state.status = 'succeeded'
//       state.products = action.payload
//     },
//     [fetchProducts.rejected]: (state, action) => {
//       state.status = 'failed'
//       state.error = action.error.message
//     },
//     [fetchCatalog.pending]: (state) => {
//       state.status = 'loading'
//     },
//     [fetchCatalog.fulfilled]: (state, action) => {
//       state.status = 'succeeded'
//       state.catalogList = action.payload
//     },
//     [fetchCatalog.rejected]: (state, action) => {
//       state.status = 'failed'
//       state.error = action.error.message
//     }
//   }
// })
