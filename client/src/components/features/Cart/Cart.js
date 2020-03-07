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

import Button from 'components/common/Button/Button';
import CartSummary from 'components/features/Cart/CartSummary';
import Fade from 'react-reveal/Fade';
import Heading from 'components/common/Heading/Heading';
import Modal from 'components/features/Cart/OrderModal';
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
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);

  ${media.desktop`
    width: 60%;
  `};
`;

const StyledImageWrapper = styled.div`
  width: 58%;
`;

const StyledImage = styled.img`
  object-fit: contain;
  width: 100%;
`;

const StyledDescWrapper = styled.div`
  width: 40%;
`;

const StyledProductTitle = styled.h3`
  font-size: 1.6rem;
  padding: 0 0 5px;
  margin: 0 0 10px;

  ${media.tablet`
    font-size: 1.8rem;
  `};

  ${media.desktop`
    font-size: 2.2rem;
  `};
`;

const StyledButtonWrapper = styled.div`
  width: 95%;
  display: flex;

  ${media.desktop`
    width: 80%;
  `};
`;

const StyledButton = styled(Button)`
  margin: 15px 0 20px auto;
`;

const RemoveButton = styled.button`
  font-size: 2.4rem;
  position: absolute;
  padding: none;
  margin: none;
  top: 0;
  font-weight: 400;
  right: 0;
  color: #e2231a;
  border: none;
  outline: none;
  background-color: transparent;
  transition: all 300ms ease-in;

  :hover {
    background-color: black;
    color: white;
  }
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

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  if (cart.length === 0) topFunction();

  return (
    <Fade>
      <StyledWrapper>
        {cart.length !== 0 && <Heading>your cart</Heading>}
        {cart.length !== 0 ? (
          cart.map(item => (
            <StyledInnerWrapper key={item.id}>
              <RemoveButton onClick={() => handleDeleteProduct(item.id)}>x</RemoveButton>
              <StyledImageWrapper>
                <StyledImage src={item.img} />
              </StyledImageWrapper>
              <StyledDescWrapper>
                <StyledProductTitle>{item.name}</StyledProductTitle>
                <Price noalign="true">${item.price}</Price>
                <QtyCounter
                  product={item}
                  decreaseCounter={minusCounter}
                  increaseCounter={plusCounter}
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
            <StyledButtonWrapper>
              <StyledButton onClick={() => toggleModal()}>order</StyledButton>
            </StyledButtonWrapper>
          </>
        )}
        {modal && <Modal />}
      </StyledWrapper>{' '}
    </Fade>
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
