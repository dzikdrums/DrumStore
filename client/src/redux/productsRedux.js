import axios from 'axios';
import { API_URL, BASE_URL } from 'config';

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* SELECTORS */

export const getProducts = ({ products }) => products.data;
export const getSingleProduct = ({ products }) => products.singlePost;
export const getRequest = ({ products }) => products.request;

/* ACTIONS */

export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
export const LOAD_SINGLE_PRODUCT = createActionName('LOAD_SINGLE_PRODUCT');
export const CHANGE_LOGED = createActionName('CHANGE_LOGED');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');

/* ACTION CREATORS */

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });
export const loadSingleProduct = payload => ({ payload, type: LOAD_SINGLE_PRODUCT });
export const changeLoged = () => ({ type: CHANGE_LOGED });
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const resetRequest = () => ({ type: RESET_REQUEST });

/* INITIAL STATE */

const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null,
  },
  singleProduct: [],
  key: '',
  direction: '',
  amount: 0,
  productsPerPage: 6,
  productsPage: 1,
  showMenu: false,
  cart: [],
  discount: 1,
  discountCode: 'SDFV86F',
  discountActive: false,
  totalPrice: 0,
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      return {
        ...statePart,
        data: action.payload,
      };
    }
    case LOAD_SINGLE_PRODUCT: {
      return {
        ...statePart,
        singleProduct: action.payload,
      };
    }
    case START_REQUEST: {
      return {
        ...statePart,
        request: {
          pending: true,
          error: null,
          success: null,
        },
      };
    }
    case END_REQUEST: {
      return {
        ...statePart,
        request: {
          pending: false,
          error: null,
          success: true,
        },
      };
    }
    case ERROR_REQUEST: {
      return {
        ...statePart,
        request: {
          pending: false,
          error: action.error,
          success: false,
        },
      };
    }
    case RESET_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: null, success: null },
      };
    default:
      return statePart;
  }
}

/* THUNKS */

export const loadProductsRequest = () => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      const res = await axios.get(`${BASE_URL}${API_URL}/products`);
      dispatch(loadProducts(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadSingleProductRequest = id => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      const res = await axios.get(`${BASE_URL}${API_URL}/product/${id}`);
      dispatch(loadSingleProduct(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadProductsByCategoryRequest = () => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      const res = await axios.get(`${BASE_URL}${API_URL}/products`);
      dispatch(loadProducts(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

// export const loadSinglePostRequest = id => {
//   return async dispatch => {
//     dispatch(startRequest());
//     try {
//       const res = await Axios.get(`${API_URL}/products/${id}`);
//       dispatch(loadSinglePost(res.data));
//       dispatch(endRequest());
//     } catch (e) {
//       dispatch(errorRequest(e.message));
//     }
//   };
// };

// export const addPostRequest = product => {
//   return async dispatch => {
//     dispatch(startRequest());
//     try {
//       Axios.product(`${API_URL}/products`, product);
//       dispatch(loadPostsRequest());
//       dispatch(endRequest());
//     } catch (e) {
//       dispatch(errorRequest(e.message));
//     }
//   };
// };

// export const deletePostRequest = id => {
//   return async dispatch => {
//     dispatch(startRequest());
//     try {
//       await Axios.delete(`${API_URL}/products/${id}`);
//       dispatch(loadPostsRequest());
//       dispatch(endRequest());
//     } catch (e) {
//       dispatch(errorRequest(e.message));
//     }
//   };
// };
