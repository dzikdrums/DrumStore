import React, { useEffect, useState } from 'react';
import {
  addToCart,
  calculatePrice,
  getCart,
  getRequest,
  getSingleProduct,
  loadSingleProductRequest,
  plusQty,
} from 'redux/productsRedux';

import AddToCartModal from 'components/features/SingleProduct/AddToCartModal';
import Button from 'components/common/Button/Button';
import Heading from 'components/common/Heading/Heading';
import Price from 'components/common/Price/Price';
import PropTypes from 'prop-types';
import Spinner from 'components/common/Spinner/Spinner';
import { connect } from 'react-redux';
import { media } from 'utils';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const StyledWrapper = styled.div`
  padding: 20px;
  width: 100%;
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
  padding: 15px 0;
  margin: 6px auto;

  ${media.tablet`
    width: 60%;
  `};
`;

const StyledDescription = styled.p`
  font-weight: 300;
  text-align: center;
  margin: 20px auto;
  width: 60%;
`;

const SingleProduct = ({
  match,
  addToCart,
  cart,
  plusQty,
  calculatePrice,
  request,
  product,
  loadSingleProductRequest,
}) => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    loadSingleProductRequest(match.params.id);
  }, []);

  const handleAddToCart = () => {
    const itemID = match.params.id;
    const cartCheck = cart.filter(item => item.id === itemID);
    setModal(!modal);

    cartCheck.length === 0 ? addToCart(product[0]) : plusQty(itemID);
    calculatePrice();
  };

  const IsItemInCart = id => {
    const isItem = cart.filter(function(item) {
      return item.id === id;
    });

    return !isItem.length ? (
      <Button onClick={() => handleAddToCart()}>add to cart</Button>
    ) : (
      <Button disable reverse="true">
        added to cart
      </Button>
    );
  };

  if (request.pending === false && request.success === true && product.length > 0)
    return (
      <StyledWrapper>
        <Heading>{product[0].name}</Heading>
        <StyledImage src={product[0].img} />
        <Price big="true">${product[0].price}</Price>
        {IsItemInCart(product[0].id)}
        {modal && <AddToCartModal />}
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
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
    }).isRequired,
  ),
  addToCart: PropTypes.func.isRequired,
  plusQty: PropTypes.func.isRequired,
  calculatePrice: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  product: getSingleProduct(state),
  request: getRequest(state),
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  addToCart: payload => dispatch(addToCart(payload)),
  plusQty: id => dispatch(plusQty(id)),
  calculatePrice: () => dispatch(calculatePrice()),
  loadSingleProductRequest: id => dispatch(loadSingleProductRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SingleProduct));
