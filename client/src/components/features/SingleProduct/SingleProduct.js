import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadSingleProductRequest, getSingleProduct, getRequest } from 'redux/productsRedux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Spinner from 'components/common/Spinner/Spinner';
import Heading from 'components/common/Heading/Heading';
import Price from 'components/common/Price/Price';
import CartButton from 'components/common/CartButton/CartButton';
import { media } from 'utils';

const StyledWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledSpinnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledImage = styled.img`
  width: 80%;
  padding-top: 15px;
  margin: 6px auto;

  ${media.tablet`
    width: 60%;
  `};
`;

const StyledDescription = styled.p`
  font-weight: 300;
  text-align: center;
  width: 60%;
  margin 20px auto;
`;

const SingleProduct = ({ match, request, product, loadSingleProductRequest }) => {
  useEffect(() => {
    loadSingleProductRequest(match.params.id);
  }, []);

  if (request.pending === false && request.success === true && product.length > 0)
    return (
      <StyledWrapper>
        <Heading>{product[0].name}</Heading>
        <StyledImage src={product[0].img} />
        <Price big="true">${product[0].price}</Price>
        <CartButton>add to cart</CartButton>
        <StyledDescription>{product[0].desc}</StyledDescription>
      </StyledWrapper>
    );
  return (
    <StyledSpinnerWrapper>
      <Spinner />
    </StyledSpinnerWrapper>
  );
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
  request: PropTypes.shape({
    pending: PropTypes.bool.isRequired,
    error: PropTypes.bool,
    success: PropTypes.bool,
  }),
};

const mapStateToProps = state => ({
  product: getSingleProduct(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadSingleProductRequest: id => dispatch(loadSingleProductRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SingleProduct));
