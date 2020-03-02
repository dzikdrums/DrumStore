import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts, loadProductsByCategoryRequest, getRequest } from 'redux/productsRedux';
import PropTypes from 'prop-types';
import ProductsList from 'components/features/ProductsList/ProductsList';
import Spinner from 'components/common/Spinner/Spinner';
import styled from 'styled-components';

const StyledSpinnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Products = ({ products, request, loadProductsRequest }) => {
  useEffect(() => {
    loadProductsRequest();
  }, []);

  if (request.pending === false && request.success === true && products.length > 0)
    return (
      <div>
        <ProductsList products={products} />
      </div>
    );
  if (request.pending === true || request.success === null)
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
  request: PropTypes.shape({
    pending: PropTypes.bool.isRequired,
    error: PropTypes.bool,
    success: PropTypes.bool,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
