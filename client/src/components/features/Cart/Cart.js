import React, { useState } from 'react';
import {
  calculatePrice,
  deleteFromCart,
  getCart,
  getTotalPrice,
  minusQty,
  plusQty,
  resetCart,
} from 'redux/productsRedux';

import CartButton from 'components/common/CartButton/CartButton';
import CartSummary from 'components/features/Cart/CartSummary';
import Heading from 'components/common/Heading/Heading';
import OrderModal from 'components/features/Cart/OrderModal';
import Price from 'components/common/Price/Price';
import PropTypes from 'prop-types';
import QtyCounter from 'components/features/Cart/QtyCounter';
import { connect } from 'react-redux';
import { media } from 'utils';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: 0 auto;
  min-height: 500px;
  width: 100%;
  align-items: center;
`;

const StyledInnerWrapper = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
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

const StyledCartButtonWrapper = styled.div`
  width: 85%;
  position: relative;
  height: 140px;
`;

const StyledCartButton = styled(CartButton)`
  position: absolute;
  margin: 0;
  right: 0;
`;

const Cart = ({
  resetCart,
  cart,
  price,
  addToCounter,
  minusFromCounter,
  deleteFromCart,
  calculatePrice,
}) => {
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

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    resetCart();
    localStorage.clear();
    calculatePrice();
  };

  return (
    <StyledWrapper>
      {cart.length !== 0 && <Heading>your cart</Heading>}
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
        <Heading>Cart is empty</Heading>
      )}
      {cart.length !== 0 && (
        <>
          <CartSummary price={price} />
          <StyledCartButtonWrapper>
            <StyledCartButton onClick={() => toggleModal()}>order</StyledCartButton>
          </StyledCartButtonWrapper>
        </>
      )}
      {modal && <OrderModal />}
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
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
    }),
  ).isRequired,
  price: PropTypes.number.isRequired,
  calculatePrice: PropTypes.func.isRequired,
  resetCart: PropTypes.func.isRequired,
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
  resetCart: () => dispatch(resetCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
