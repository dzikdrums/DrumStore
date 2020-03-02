import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts, loadProductsByCategoryRequest } from 'redux/productsRedux';
import PropTypes from 'prop-types';

const Products = ({ products, loadProductsRequest }) => {
  useEffect(() => {
    loadProductsRequest();
  }, []);
  console.log(products);

  return <h1>heheszki</h1>;
};

const mapStateToProps = state => ({
  products: getProducts(state),
});

const mapDispatchToProps = dispatch => ({
  loadProductsRequest: () => dispatch(loadProductsByCategoryRequest()),
});

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
    }),
  ),
  loadProductsRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
