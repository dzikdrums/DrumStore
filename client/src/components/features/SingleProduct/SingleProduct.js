import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadSingleProductRequest, getSingleProduct } from 'redux/productsRedux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  color: black;
`;

const SingleProduct = ({ match, product, loadSingleProductRequest }) => {
  useEffect(() => {
    console.log(match.params.id);

    loadSingleProductRequest(match.params.id);
  }, []);

  return <StyledWrapper>{console.log(product[0])}</StyledWrapper>;
};

SingleProduct.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  product: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tag: PropTypes.string,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      desc: PropTypes.string,
    }),
  ),
  loadSingleProductRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  product: getSingleProduct(state),
});

const mapDispatchToProps = dispatch => ({
  loadSingleProductRequest: id => dispatch(loadSingleProductRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SingleProduct));
