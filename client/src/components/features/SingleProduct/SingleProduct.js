import React, { useEffect, useState } from 'react';
import {
  addToCart,
  calculatePrice,
  getCart,
  getComments,
  getRequest,
  getSingleProduct,
  loadSingleProductRequest,
  plusQty,
} from 'redux/productsRedux';

import AddToCartModal from 'components/features/SingleProduct/AddToCartModal';
import Button from 'components/common/Button/Button';
import Fade from 'react-reveal/Fade';
import Heading from 'components/common/Heading/Heading';
import Price from 'components/common/Price/Price';
import PriceOption from 'utils/PriceOption';
import PropTypes from 'prop-types';
import Rating from 'components/common/Rating/Rating';
import Reviews from 'components/features/Reviews/Reviews';
import Spinner from 'components/common/Spinner/Spinner';
import { connect } from 'react-redux';
import { media } from 'utils';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { loadCurrencyRates } from '../../../redux/productsRedux';

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

  ${media.desktop`
    width: 50%;
  `};
`;

const StyledDescription = styled.p`
  font-weight: 300;
  text-align: center;
  margin: 20px auto;
  width: 80%;
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
  loadCurrencyRates,
}) => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    loadSingleProductRequest(match.params.id);
    loadCurrencyRates();
  }, [loadSingleProductRequest, match.params.id, loadCurrencyRates]);

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
      <Fade>
        <StyledWrapper>
          <Heading>{product[0].name}</Heading>
          <StyledImage src={product[0].img} />
          <Rating alignCenter="true" rating={product[0].comments} />
          <StyledDescription>{product[0].desc}</StyledDescription>
          <Price big="true">
            <PriceOption price={product[0].price} />
          </Price>
          {IsItemInCart(product[0].id)}
          {modal && <AddToCartModal />}
          <Reviews
            id={product[0].id}
            img={product[0].img}
            name={product[0].name}
            comments={product[0].comments}
          />
        </StyledWrapper>
      </Fade>
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
      rating: PropTypes.number,
      comments: PropTypes.array,
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
  loadCurrencyRates: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  product: getSingleProduct(state),
  request: getRequest(state),
  cart: getCart(state),
  comments: getComments(state),
});

const mapDispatchToProps = dispatch => ({
  addToCart: payload => dispatch(addToCart(payload)),
  plusQty: id => dispatch(plusQty(id)),
  calculatePrice: () => dispatch(calculatePrice()),
  loadSingleProductRequest: id => dispatch(loadSingleProductRequest(id)),
  loadCurrencyRates: () => dispatch(loadCurrencyRates()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SingleProduct));
