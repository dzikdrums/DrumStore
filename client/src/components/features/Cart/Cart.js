import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getCart,
  getTotalPrice,
  plusQty,
  minusQty,
  deleteFromCart,
  calculatePrice,
} from 'redux/productsRedux';
import Heading from 'components/common/Heading/Heading';
import Price from 'components/common/Price/Price';
import { media } from 'utils';
import QtyCounter from 'components/features/Cart/QtyCounter';
import CartSummary from 'components/features/Cart/CartSummary';

const StyledWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  align-items: center;
`;

const StyledInnerWrapper = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  width: 70%;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);

  :hover {
    transform: scale(1.01);
  }

  ${media.desktop`
    width: 60%;
  `};
`;

const StyledImage = styled.img`
  width: 70%;
  object-fit: contain;
`;

const StyledDescWrapper = styled.div`
  width: 40%;
`;

const StyledProductTitle = styled.h3`
  font-size: 1rem;
  padding: 20px 0 10px;

  ${media.tablet`
    font-size: 1.4rem;
  `};

  ${media.desktop`
    font-size: 1.8rem;
  `};
`;

const Cart = ({ cart, price, addToCounter, minusFromCounter, deleteFromCart, calculatePrice }) => {
  const handleDeleteProduct = id => {
    deleteFromCart(id);
    calculatePrice();
  };

  const minusCounter = id => {
    minusFromCounter(id);
    calculatePrice();
  };

  const plusCounter = id => {
    addToCounter(id);
    calculatePrice();
  };

  return (
    <StyledWrapper>
      <Heading>your cart</Heading>
      {cart.length !== 0 ? (
        cart.map(item => (
          <StyledInnerWrapper key={item.id}>
            <StyledImage src={item.img} />
            <StyledDescWrapper>
              <StyledProductTitle>{item.name}</StyledProductTitle>
              <Price noalign="true">${item.price}</Price>
              <QtyCounter
                product={item}
                decreaseCounter={minusCounter}
                increaseCounter={plusCounter}
                deleteProduct={handleDeleteProduct}
              />
            </StyledDescWrapper>
          </StyledInnerWrapper>
        ))
      ) : (
        <h1>Cart is empty</h1>
      )}
      <CartSummary price={price} />
    </StyledWrapper>
  );
};

Cart.propTypes = {
  deleteFromCart: PropTypes.func.isRequired,
  minusFromCounter: PropTypes.func.isRequired,
  addToCounter: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      img: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
    }),
  ).isRequired,
  price: PropTypes.number.isRequired,
  calculatePrice: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: getCart(state),
  price: getTotalPrice(state),
});

const mapDispatchToProps = dispatch => ({
  addToCounter: id => dispatch(plusQty(id)),
  minusFromCounter: id => dispatch(minusQty(id)),
  deleteFromCart: id => dispatch(deleteFromCart(id)),
  calculatePrice: () => dispatch(calculatePrice()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
