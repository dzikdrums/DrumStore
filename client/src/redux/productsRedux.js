import { API_URL, BASE_URL } from 'config';

import axios from 'axios';

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* SELECTORS */

export const getProducts = ({ products }) => products.data;
export const getSingleProduct = ({ products }) => products.singleProduct;
export const getRequest = ({ products }) => products.request;
export const getCart = ({ products }) => products.cart;
export const getTotalPrice = ({ products }) => products.totalPrice;
export const getCurrency = ({ products }) => products.currency;
export const getExchangeRate = ({ products }) => products.exchangeRate;
export const getComments = ({ products }) => products.comments;

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
export const CHANGE_QTY = createActionName('CHANGE_QTY');
export const RESET_CART = createActionName('RESET_CART');
export const SET_CART = createActionName('SET_CART');
export const CALCULATE_PRICE = createActionName('CALCULATE_PRICE');
export const SORT_OPTIONS = createActionName('SORT_OPTIONS');
export const CURRENCY_CHANGE = createActionName('CURRENCY_CHANGE');
export const CURRENCY_RATE_SET = createActionName('CURRENCY_RATE_SET');
// export const ADD_COMMENT = createActionName('ADD_COMMENT');

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
export const changeQty = (id, qty) => ({ id, qty, type: CHANGE_QTY });
export const resetCart = () => ({ type: RESET_CART });
export const setCart = payload => ({ payload, type: SET_CART });
export const calculatePrice = () => ({ type: CALCULATE_PRICE });
// export const addComment = () => ({ payload, type: ADD_COMMENT })
export const sortOptions = payload => ({ payload, type: SORT_OPTIONS });
export const currencyChange = payload => ({ payload, type: CURRENCY_CHANGE });
export const currencyRateSet = payload => ({ payload, type: CURRENCY_RATE_SET });
export const getProductsSort = ({ products }) => {
  const sortProducts = [...products.data].sort((a, b) => {
    if (a[products.key] > b[products.key]) return products.direction === 'asc' ? 1 : -1;
    if (a[products.key] < b[products.key]) return products.direction === 'asc' ? -1 : 1;
    return 0;
  });
  return sortProducts;
};

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
  currency: 'USD',
  exchangeRate: 0,
  direction: '',
  amount: 0,
  cart: [
    {
      id: '9234a',
      tag: '',
      img: '../../../images/prod11.jpg',
      name: 'Ddrum Maple SC',
      price: 1364.99,
      category: 'drums',
      desc:
        'True beauty in this price range. With great history, made firstly in early 80s in Japan, designed to fit most genres, from jazz, folk music, to metal and really extreme sounds. Great in tuning, and pretty lightweight so really easy to travel with!',
      qty: 1,
      comments: [
        {
          rating: 5,
          comment: 'Great product for all genres',
          name: 'Monica',
          date: '2019-10-15T03:35:32.000Z',
        },
        {
          rating: 5,
          comment: 'Very happy with the product but not the durability',
          name: 'Rafael',
          date: '2019-11-15T03:35:32.000Z',
        },
        {
          rating: 5,
          comment: 'In love with the product!',
          name: 'Sven',
          date: '2019-11-17T03:35:32.000Z',
        },
        {
          rating: 5,
          comment: 'Everything a good product should have!',
          name: 'Mike',
          date: '2018-10-15T03:35:32.000Z',
        },
        {
          rating: 5,
          comment: 'Broke after year of using :/',
          name: 'Dean',
          date: '2019-12-15T03:35:32.000Z',
        },
        {
          rating: 5,
          comment: 'Solid and reliable product!',
          name: 'Bart',
          date: '2019-10-27T03:35:32.000Z',
        },
      ],
    },
    {
      id: '10234a',
      tag: '',
      img: '../../../images/prod08.jpg',
      name: 'TAMA Starclass short shell',
      price: 392.99,
      category: 'drums',
      desc:
        'The classic. The Legend. One and only Starclassic with a modern addition of exotic tree which adds a different flavour to well known sound! Love at first sight to every customer we had in our shop !',
      qty: 1,
      comments: [
        {
          rating: 4,
          comment: 'Great product for all genres',
          name: 'Monica',
          date: '2019-10-15T03:35:32.000Z',
        },
        {
          rating: 3,
          comment: 'Very happy with the product but not the durability',
          name: 'Rafael',
          date: '2019-11-15T03:35:32.000Z',
        },
        {
          rating: 5,
          comment: 'In love with the product!',
          name: 'Sven',
          date: '2019-11-17T03:35:32.000Z',
        },
        {
          rating: 4,
          comment: 'Everything a good product should have!',
          name: 'Mike',
          date: '2018-10-15T03:35:32.000Z',
        },
        {
          rating: 2,
          comment: 'Broke after year of using :/',
          name: 'Dean',
          date: '2019-12-15T03:35:32.000Z',
        },
        {
          rating: 4,
          comment: 'Solid and reliable product!',
          name: 'Bart',
          date: '2019-10-27T03:35:32.000Z',
        },
      ],
    },
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
    case CHANGE_QTY:
      const product = statePart.cart.find(el => el.id === action.id);
      product.qty = action.qty;
      const cartUpdate = statePart.cart.map(el => (el.id === action.id ? product : el));
      return {
        ...statePart,
        cart: cartUpdate,
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
    case SORT_OPTIONS:
      return {
        ...statePart,
        key: action.payload.key,
        direction: action.payload.direction,
      };
    case CURRENCY_CHANGE:
      return {
        ...statePart,
        currency: action.payload,
      };
    case CURRENCY_RATE_SET:
      return {
        ...statePart,
        exchangeRate: action.payload,
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

export const loadCurrencyRates = () => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      const res = await axios.get(`https://api.exchangeratesapi.io/latest?base=USD`);
      dispatch(currencyRateSet(res.data.rates.PLN));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const addComment = commentId => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      const { id } = commentId;
      const { comment } = commentId;
      await axios.post(`${BASE_URL}${API_URL}/product/${id}`, comment);
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const sendOrder = order => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      await axios.post(`${BASE_URL}/panel/orders`, order);
      console.log('hehe');
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};
