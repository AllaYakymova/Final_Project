
const API = {
  AUTH: {
    INDEX: 'auth',
    ACTIONS: {
      CHECK_IN: {
        REQUEST: 'auth/checkIn',
        START: 'auth/checkIn_start',
        SUCCESS: 'auth/checkIn_success',
        ERROR: 'auth/checkIn_error'
      },
      LOG_IN: {
        REQUEST: 'auth/logIn',
        START: 'auth/logIn_start',
        SUCCESS: 'auth/logIn_success',
        ERROR: 'auth/logIn_error'
      },
    }
  },
  PRODUCTS: {
    INDEX: 'products',
    ACTIONS: {
      FETCH_ALL_PRODUCTS: {
        REQUEST: 'products/fetchAllProducts',
        START: 'products/fetchAllProducts_start',
        SUCCESS: 'products/fetchAllProducts_success',
        ERROR: 'products/fetchAllProducts_error'
      },
      FETCH_FILTERED_PRODUCTS: {
        REQUEST: 'products/fetchFilteredProducts',
        START: 'products/fetchFilteredProducts_start',
        SUCCESS: 'products/fetchFilteredProducts_success',
        ERROR: 'products/fetchFilteredProducts_error'
      },
      FETCH_CATALOG: {
        REQUEST: 'products/fetchCatalog',
        START: 'products/fetchCatalog_start',
        SUCCESS: 'products/fetchCatalog_success',
        ERROR: 'products/fetchCatalog_error'
      },
      CURRENT_PRODUCTS: 'products/setCurrentProducts',
      CURRENT_PAGE: 'products/setCurrentPage',
      PRODUCTS_PER_PAGE: 'products/setProductsPerPage',
    },
  },
  CART: {
    INDEX: 'cart',
    ACTIONS: {
      CREATE_CART: {
        REQUEST: 'cart/createCart',
        START: 'cart/createCart_start',
        SUCCESS: 'cart/createCart_success',
        ERROR: 'cart/createCart_error'
      },
      FETCH_CART_PRODUCTS: {
        REQUEST: 'cart/fetchCartProducts',
        START: 'cart/fetchCartProducts_start',
        SUCCESS: 'cart/fetchCartProducts_success',
        ERROR: 'cart/fetchCartProducts_error'
      },
      CREATE_LOCAL_CART: 'cart/createLocalCart',
      SET_CART_SUM: 'cart/setCartSum',
      ADD_PRODUCT: 'cart/addProductToCart',
      REDUCE_PRODUCT_AMOUNT: 'cart/reduceProductInCart',
      REMOVE_PRODUCT: 'cart/removeProductFromCart',
      CLEAR_CART: 'cart/clearCart'
    },
  },
  ADMIN: {
    INDEX: 'adminProduct',
    ACTIONS: {
      ADD_PRODUCT: {
        REQUEST: 'adminProduct/addMyProduct',
        START: 'adminProduct/addMyProduct_start',
        SUCCESS: 'adminProduct/addMyProduct_success',
        ERROR: 'adminProduct/addMyProduct_error'
      },
      EDIT_PRODUCT: {
        REQUEST: 'adminProduct/editMyProduct',
        START: 'adminProduct/editMyProduct_start',
        SUCCESS: 'adminProduct/editMyProduct_success',
        ERROR: 'adminProduct/editMyProduct_error'
      },
      DELETE_PRODUCT: {
        REQUEST: 'adminProduct/deleteMyProduct',
        START: 'adminProduct/deleteMyProduct_start',
        SUCCESS: 'adminProduct/deleteMyProduct_success',
        ERROR: 'adminProduct/deleteMyProduct_error'
      },
      GET_PRODUCT_BY_ID: {
        REQUEST: 'adminProduct/getProductById',
        START: 'adminProduct/getProductById_start',
        SUCCESS: 'adminProduct/getProductById_success',
        ERROR: 'adminProduct/getProductById_error'
      },
    },
  },
  ORDERS: {
    INDEX: 'orders',
    ACTIONS: {
      SEND_ORDER: {
        REQUEST: 'orders/sentOrder',
        START: 'orders/sentOrder_start',
        SUCCESS: 'orders/sentOrder_success',
        ERROR: 'orders/sentOrder_error'
      },
      GET_ORDERS: {
        REQUEST: 'orders/getOrders',
        START: 'orders/getOrders_start',
        SUCCESS: 'orders/getOrders_success',
        ERROR: 'orders/getOrders_error'
      },
      GET_ORDER_BY_ID: {
        REQUEST: 'orders/getOrderById',
        START: 'orders/getOrderById_start',
        SUCCESS: 'orders/getOrderById_success',
        ERROR: 'orders/getOrderById_error'
      },
      CLEAR_ORDER_DETAILS: 'orders/clearOrderDetails'
    },
  },
  UI: {
    INDEX: 'ui',
    OPEN_CREATE_MODAL: 'ui/isCreateModalOpen',
    OPEN_EDIT_MODAL: 'ui/isEditModalOpen'
  }
};

export default API;
