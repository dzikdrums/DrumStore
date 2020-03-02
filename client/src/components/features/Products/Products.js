import React from 'react';
import { connect } from 'react-redux';
import { getProducts, getRequest, loadProductsByCategoryRequest } from 'redux/productsRedux';

const productType = 'drums';

const Products = () => {
  console.log(productType);

  return <h1>heheszki</h1>;
};

const mapStateToProps = state => ({
  products: getProducts(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadProducts: productType => dispatch(loadProductsByCategoryRequest(productType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
