import Axios from 'axios';
import { API_URL } from 'config';

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

/* ACTION CREATORS */

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });
export const loadSingleProduct = payload => ({ payload, type: LOAD_SINGLE_PRODUCT });
export const changeLoged = () => ({ type: CHANGE_LOGED });
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

/* INITIAL STATE */

const initialState = {
  data: [],
  request: {
    pending: true,
    error: null,
    success: null,
  },
  singlePost: {},
  loged: true,
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
        singlePost: action.payload,
      };
    }
    case CHANGE_LOGED: {
      return {
        ...statePart,
        loged: !statePart.loged,
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
    default:
      return statePart;
  }
}

/* THUNKS */

export const loadProductsByCategoryRequest = () => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      const res = await Axios.get(`${API_URL}/products`);
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
