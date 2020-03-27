import { getCurrency, getExchangeRate } from 'redux/productsRedux';

import { connect } from 'react-redux';
import { exchangeCurrency } from 'utils';

const priceOption = ({ price, getExchangeRate, getCurrency }) => {
  if (getCurrency === 'USD') {
    return `${price.toFixed(2)} $`;
  }
  return `${exchangeCurrency(price, getExchangeRate).toFixed(2)}zł`;
};

const mapStateToProps = state => ({
  getExchangeRate: getExchangeRate(state),
  getCurrency: getCurrency(state),
});

export default connect(mapStateToProps)(priceOption);
