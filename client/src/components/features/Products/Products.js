import React, { useEffect } from 'react';
import { getProducts, getRequest, loadProductsByCategoryRequest } from 'redux/productsRedux';

import ProductsList from 'components/features/ProductsList/ProductsList';
import PropTypes from 'prop-types';
import Spinner from 'components/common/Spinner/Spinner';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledSpinnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Products = ({ category, products, request, loadProductsByCategoryRequest }) => {
  useEffect(() => {
    loadProductsByCategoryRequest(category);
  }, []);

  if (request.pending === false && request.success === true && products.length > 0)
    return (
      <div>
        <ProductsList products={products} />
      </div>
    );
  return (
    <StyledSpinnerWrapper>
      <Spinner />
    </StyledSpinnerWrapper>
  );
};

const mapStateToProps = state => ({
  products: getProducts(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadProductsByCategoryRequest: category => dispatch(loadProductsByCategoryRequest(category)),
});

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
    }),
  ),
  category: PropTypes.string.isRequired,
  loadProductsByCategoryRequest: PropTypes.func.isRequired,
  request: PropTypes.shape({
    pending: PropTypes.bool.isRequired,
    error: PropTypes.bool,
    success: PropTypes.bool,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
