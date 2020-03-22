import { getCurrency, getExchangeRate } from 'redux/productsRedux';

import React from 'react';
import { connect } from 'react-redux';
import { exchangeCurrency } from 'utils';

const priceOption = ({ price, getExchangeRate, getCurrency }) => {
  if (getCurrency === 'USD') {
    return `${price} $`;
  }
  return `${exchangeCurrency(price, getExchangeRate)}zł`;
};

const mapStateToProps = state => ({
  getExchangeRate: getExchangeRate(state),
  getCurrency: getCurrency(state),
});

export default connect(mapStateToProps)(priceOption);
