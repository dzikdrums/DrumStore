import axios from 'axios';
import { API_URL, BASE_URL } from 'config';

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* SELECTORS */

export const getProducts = ({ products }) => products.data;
export const getSingleProduct = ({ products }) => products.singleProduct;
export const getRequest = ({ products }) => products.request;
export const getCart = ({ products }) => products.cart;
export const getTotalPrice = ({ products }) => products.totalPrice;

/* ACTIONS */

export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
export const LOAD_SINGLE_PRODUCT = createActionName('LOAD_SINGLE_PRODUCT');
export const CHANGE_LOGED = createActionName('CHANGE_LOGED');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');
export const ADD_TO_CART = createActionName('ADD_TO_CART');
export const DELETE_FROM_CART = createActionName('DELETE_FROM_CART');
export const PLUS_QTY = createActionName('PLUS_QTY');
export const MINUS_QTY = createActionName('MINUS_QTY');
export const RESET_CART = createActionName('RESET_CART');
export const SET_CART = createActionName('SET_CART');
export const CALCULATE_PRICE = createActionName('CALCULATE_PRICE');

/* ACTION CREATORS */

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });
export const loadSingleProduct = payload => ({ payload, type: LOAD_SINGLE_PRODUCT });
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const resetRequest = () => ({ type: RESET_REQUEST });
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const deleteFromCart = payload => ({ payload, type: DELETE_FROM_CART });
export const plusQty = id => ({ id, type: PLUS_QTY });
export const minusQty = id => ({ id, type: MINUS_QTY });
export const resetCart = () => ({ type: RESET_CART });
export const setCart = payload => ({ payload, type: SET_CART });
export const calculatePrice = () => ({ type: CALCULATE_PRICE });

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
  cart: [
    // {
    //   id: '1234a',
    //   tag: 'new',
    //   img: '../../../images/prod07.jpg',
    //   name: 'Gretsch Tamburina maple custom ',
    //   price: 2362.99,
    //   category: 'drums',
    //   desc:
    //     'Great set for beginniners and more advanced players. Full sound with good slap on toms and meaty sounding bass drum. Made with love to drums in mind. Recommended for rock and metal music big times!',
    //   qty: 0,
    // },
    // {
    //   id: '6234b',
    //   tag: '',
    //   img: '../../../images/cymb5.jpg',
    //   name: 'Paiste 101 Crash 16',
    //   price: 1199,
    //   category: 'cymbals',
    //   desc: '',
    //   qty: 0,
    // },
  ],
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
    case ADD_TO_CART:
      const addedProduct = action.payload;
      addedProduct.qty += 1;
      return {
        ...statePart,
        cart: statePart.cart.concat(addedProduct),
        orderStatus: false,
      };
    case DELETE_FROM_CART:
      const updateCart = statePart.cart.filter(el => el.id !== action.payload);
      return {
        ...statePart,
        cart: updateCart,
      };
    case PLUS_QTY:
      const productPlus = statePart.cart.find(el => el.id === action.id);
      productPlus.qty += 1;
      const plusCartUpdate = statePart.cart.map(el => (el.id === action.id ? productPlus : el));
      return {
        ...statePart,
        cart: plusCartUpdate,
      };
    case MINUS_QTY:
      const productMinus = statePart.cart.find(el => el.id === action.id);
      productMinus.qty -= 1;
      const minusCartUpdate = statePart.cart.map(el => (el.id === action.id ? productMinus : el));
      return {
        ...statePart,
        cart: minusCartUpdate,
      };
    case RESET_CART:
      return {
        ...statePart,
        cart: [],
      };
    case SET_CART:
      return {
        ...statePart,
        cart: action.payload,
      };
    case CALCULATE_PRICE:
      let roundPrice;
      if (statePart.cart.length !== 0) {
        const allPrices = statePart.cart.map(el =>
          el.item ? el.price * el.qty * 1.1 : el.price * el.qty,
        );
        const sumPrices = allPrices.reduce((prev, curr) => prev + curr);
        roundPrice = parseFloat(sumPrices.toFixed(2));
      } else {
        roundPrice = 0;
      }
      return {
        ...statePart,
        totalPrice: roundPrice,
      };
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

export const loadProductsByCategoryRequest = category => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      const res = await axios.get(`${BASE_URL}${API_URL}/products/category/${category}`);
      dispatch(loadProducts(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};
