import React, { useEffect, useState } from 'react';
import {
  calculatePrice,
  changeQty,
  deleteFromCart,
  getCart,
  getTotalPrice,
  loadCurrencyRates,
  minusQty,
  plusQty,
} from 'redux/productsRedux';

import Button from 'components/common/Button/Button';
import CartItemMobile from 'components/features/Cart/CartItemMobile';
import CartItemTablet from 'components/features/Cart/CartItemTablet';
import CartSummary from 'components/features/Cart/CartSummary';
import Fade from 'react-reveal/Fade';
import Heading from 'components/common/Heading/Heading';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import QtyCounter from 'components/features/Cart/QtyCounter';
import { connect } from 'react-redux';
import { media } from 'utils';
import styled from 'styled-components';
import uniqid from 'uniqid';

const StyledWrapper = styled.div`
  min-height: 500px;
  width: 100%;
`;

const StyledButtonWrapper = styled.div`
  width: 95%;
  display: flex;

  ${media.desktop`
    width: 80%;
  `};
`;

const StyledTable = styled.table`
  margin: 60px auto 0;
`;

const StyledHeadings = styled.th`
  text-align: left;
  letter-spacing: 2px;
  font-size: 1.6rem;
  font-weight: 300;
  padding-bottom: 10px;
  text-transform: uppercase;
  border-bottom: 1px solid #ddd;
`;

const StyledButton = styled(Button)`
  margin: 15px 0 20px auto;
`;

const StyledMobileCartItem = styled.div`
  color: black;
  position: relative;
`;

const Cart = ({
  cart,
  price,
  addToCounter,
  minusFromCounter,
  deleteFromCart,
  calculatePrice,
  loadCurrencyRates,
  changeQty,
}) => {
  const [isMobile, setMobile] = useState(window.innerWidth < 480);

  const handleWindowResize = () => {
    setMobile(window.innerWidth < 480);
  };

  useEffect(() => {
    loadCurrencyRates();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [isMobile, loadCurrencyRates]);

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

  const handleCheckout = () => {
    calculatePrice();
  };

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  if (cart.length === 0) topFunction();

  if (isMobile) {
    return (
      <Fade>
        <StyledWrapper>
          {cart.length !== 0 ? (
            <>
              <Heading>your cart</Heading>
              {cart.map(item => (
                <StyledMobileCartItem key={uniqid()}>
                  <CartItemMobile {...item} handleDeleteProduct={handleDeleteProduct} />
                  <QtyCounter
                    product={item}
                    changeQty={changeQty}
                    plusCounter={plusCounter}
                    minusCounter={minusCounter}
                    mobile="true"
                  />
                </StyledMobileCartItem>
              ))}
              <CartSummary price={price} />
              <StyledButtonWrapper>
                <StyledButton as={NavLink} to="/checkout">
                  order
                </StyledButton>
              </StyledButtonWrapper>
            </>
          ) : (
            <Heading>Cart is empty</Heading>
          )}
        </StyledWrapper>
      </Fade>
    );
  }
  return (
    <Fade>
      <StyledWrapper>
        {cart.length !== 0 ? (
          <>
            <Heading>your cart</Heading>
            <StyledTable>
              <thead>
                <tr>
                  <StyledHeadings>product</StyledHeadings>
                  <StyledHeadings>price</StyledHeadings>
                  <StyledHeadings>quantity</StyledHeadings>
                  <StyledHeadings>total</StyledHeadings>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <CartItemTablet
                    key={uniqid()}
                    item={item}
                    plusCounter={plusCounter}
                    minusCounter={minusCounter}
                    changeQty={changeQty}
                    handleDeleteProduct={handleDeleteProduct}
                  />
                ))}
              </tbody>
            </StyledTable>
            <CartSummary price={price} />
            <StyledButtonWrapper onClick={handleCheckout}>
              <StyledButton as={NavLink} to="/checkout">
                order
              </StyledButton>
            </StyledButtonWrapper>
          </>
        ) : (
          <Heading>Cart is empty</Heading>
        )}
      </StyledWrapper>
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
  loadCurrencyRates: PropTypes.func.isRequired,
  changeQty: PropTypes.func.isRequired,
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
  loadCurrencyRates: () => dispatch(loadCurrencyRates()),
  changeQty: (id, qty) => dispatch(changeQty(id, qty)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
