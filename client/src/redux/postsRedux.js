// import Axios from 'axios';
// // import { API_URL } from 'config';

// /* action name creator */
// const reducerName = 'posts';
// const createActionName = name => `app/${reducerName}/${name}`;

// /* SELECTORS */

// export const getPosts = ({ posts }) => posts.data;
// export const getSinglePost = ({ posts }) => posts.singlePost;
// export const getRequest = ({ posts }) => posts.request;
// export const isLoged = ({ posts }) => posts.loged;

// /* ACTIONS */

// export const LOAD_POSTS = createActionName('LOAD_POSTS');
// export const LOAD_SINGLE_POST = createActionName('LOAD_SINGLE_POST');
// export const CHANGE_LOGED = createActionName('CHANGE_LOGED');
// export const START_REQUEST = createActionName('START_REQUEST');
// export const END_REQUEST = createActionName('END_REQUEST');
// export const ERROR_REQUEST = createActionName('ERROR_REQUEST');

// /* ACTION CREATORS */

// export const loadPosts = payload => ({ payload, type: LOAD_POSTS });
// export const loadSinglePost = payload => ({ payload, type: LOAD_SINGLE_POST });
// export const changeLoged = () => ({ type: CHANGE_LOGED });
// export const startRequest = () => ({ type: START_REQUEST });
// export const endRequest = () => ({ type: END_REQUEST });
// export const errorRequest = error => ({ error, type: ERROR_REQUEST });

// /* INITIAL STATE */

// const initialState = {
//   data: [],
//   request: {
//     pending: true,
//     error: null,
//     success: null,
//   },
//   singlePost: {},
//   loged: true,
// };

// /* REDUCER */

// export default function reducer(statePart = initialState, action = {}) {
//   switch (action.type) {
//     case LOAD_POSTS: {
//       return {
//         ...statePart,
//         data: action.payload,
//       };
//     }
//     case LOAD_SINGLE_POST: {
//       return {
//         ...statePart,
//         singlePost: action.payload,
//       };
//     }
//     case CHANGE_LOGED: {
//       return {
//         ...statePart,
//         loged: !statePart.loged,
//       };
//     }
//     case START_REQUEST: {
//       return {
//         ...statePart,
//         request: {
//           pending: true,
//           error: null,
//           success: null,
//         },
//       };
//     }
//     case END_REQUEST: {
//       return {
//         ...statePart,
//         request: {
//           pending: false,
//           error: null,
//           success: true,
//         },
//       };
//     }
//     case ERROR_REQUEST: {
//       return {
//         ...statePart,
//         request: {
//           pending: false,
//           error: action.error,
//           success: false,
//         },
//       };
//     }
//     default:
//       return statePart;
//   }
// }

// /* THUNKS */

// export const loadPostsRequest = () => {
//   return async dispatch => {
//     dispatch(startRequest());
//     try {
//       const res = await Axios.get(`${API_URL}/posts`);
//       dispatch(loadPosts(res.data));
//       dispatch(endRequest());
//     } catch (e) {
//       dispatch(errorRequest(e.message));
//     }
//   };
// };

// export const loadSinglePostRequest = id => {
//   return async dispatch => {
//     dispatch(startRequest());
//     try {
//       const res = await Axios.get(`${API_URL}/posts/${id}`);
//       dispatch(loadSinglePost(res.data));
//       dispatch(endRequest());
//     } catch (e) {
//       dispatch(errorRequest(e.message));
//     }
//   };
// };

// export const addPostRequest = post => {
//   return async dispatch => {
//     dispatch(startRequest());
//     try {
//       Axios.post(`${API_URL}/posts`, post);
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
//       await Axios.delete(`${API_URL}/posts/${id}`);
//       dispatch(loadPostsRequest());
//       dispatch(endRequest());
//     } catch (e) {
//       dispatch(errorRequest(e.message));
//     }
//   };
// };
