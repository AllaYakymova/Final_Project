// import {
//   PRODUCTS_REQUEST_ERROR,
//   PRODUCTS_REQUEST_IN_PROCESS,
//   PRODUCTS_REQUEST_SUCCESS,
// } from '../../constants/constants'
//
// const initialStore = {
//   products: [],
//   isLoaded: false,
//   error: ''
// }
//
// const fetchProductsReducer = (store = initialStore, action) => {
//   switch (action.type) {
//     case PRODUCTS_REQUEST_SUCCESS:
//       return {
//         ...store,
//         isLoaded: true,
//         products: action.payload
//       }
//     case PRODUCTS_REQUEST_ERROR:
//       return {
//         ...store,
//         isLoaded: false,
//         error: action.payload
//       }
//     case PRODUCTS_REQUEST_IN_PROCESS:
//       return {
//         ...store,
//         isLoaded: false
//       }
//     default:
//       return store
//   }
// }
//
// export default fetchProductsReducer
