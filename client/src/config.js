export const API_URL = '/api';
export const AUTH_URL = '/auth';
export const BASE_URL =
  process.env.NODE_ENV !== 'development'
    ? 'https://drumstores2.herokuapp.com'
    : 'http://localhost:8000';
