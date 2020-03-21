const exchangeCurrency = (price, exchangeRate) => {
  return Math.floor(price * exchangeRate);
};

export default exchangeCurrency;
