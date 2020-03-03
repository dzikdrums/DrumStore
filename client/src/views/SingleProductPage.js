import React from 'react';
import SingleProduct from 'components/features/SingleProduct/SingleProduct';
import PropTypes from 'prop-types';

const SingleProductPage = ({ productID }) => (
  <>
    <SingleProduct ID={productID} />
  </>
);

SingleProductPage.propTypes = {
  productID: PropTypes.string,
};

export default SingleProductPage;
