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
  resetCart,
} from 'redux/productsRedux';

import Button from 'components/common/Button/Button';
import CartSummary from 'components/features/Cart/CartSummary';
import Fade from 'react-reveal/Fade';
import Heading from 'components/common/Heading/Heading';
import Modal from 'components/features/Cart/OrderModal';
import Price from 'components/common/Price/Price';
import PriceOption from 'utils/PriceOption';
import PropTypes from 'prop-types';
import QtyCounter from 'components/features/Cart/QtyCounter';
import { connect } from 'react-redux';
import { media } from 'utils';
import styled from 'styled-components';
import trash from 'assets/trash.svg';

const StyledWrapper = styled.div`
  min-height: 500px;
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

const RemoveButton = styled.img`
  width: 20px;
  height: 20px;
`;

const StyledTable = styled.table`
  width: 95%;
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

const StyledTableBody = styled.th`
  text-align: left;
  color: black;
  font-weight: 400;
  border-bottom: 1px solid #ddd;
  padding: 5px 10px;
  text-transform: uppercase;

  ${media.tablet`
    max-width: 360px;
    min-width: 110px;
    `};
`;

const StyledImage = styled.img`
  height: 150px;
`;

const StyledRemoveButton = styled.button`
  margin: 0 auto;
  display: inline-block;
  width: 110px;
  background-color: transparent;
  border: none;
`;

const Cart = ({
  resetCart,
  cart,
  price,
  addToCounter,
  minusFromCounter,
  deleteFromCart,
  calculatePrice,
  loadCurrencyRates,
  changeQty,
}) => {
  useEffect(() => {
    loadCurrencyRates();
  });

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
        {cart.length !== 0 ? (
          <>
            <Heading>your cart</Heading>
            <StyledTable>
              <tr>
                <StyledHeadings>product</StyledHeadings>
                <StyledHeadings>price</StyledHeadings>
                <StyledHeadings>quantity</StyledHeadings>
                <StyledHeadings>total</StyledHeadings>
              </tr>
              {cart.map(item => (
                <tr key={item.id}>
                  <StyledTableBody>
                    <td>
                      <StyledImage src={item.img} />
                    </td>
                    <td>{item.name}</td>
                  </StyledTableBody>
                  <StyledTableBody>
                    <Price noalign="true" black>
                      <PriceOption price={item.price} />
                    </Price>
                  </StyledTableBody>
                  <StyledTableBody>
                    <QtyCounter
                      product={item}
                      changeQty={changeQty}
                      decreaseCounter={minusCounter}
                      increaseCounter={plusCounter}
                    />
                    <StyledRemoveButton>
                      <RemoveButton src={trash} onClick={() => handleDeleteProduct(item.id)} />
                    </StyledRemoveButton>
                  </StyledTableBody>
                  <StyledTableBody>
                    <Price noalign="true" big="true">
                      <PriceOption price={item.price * item.qty} />
                    </Price>
                  </StyledTableBody>
                </tr>
              ))}
            </StyledTable>
          </>
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
  resetCart: () => dispatch(resetCart()),
  loadCurrencyRates: () => dispatch(loadCurrencyRates()),
  changeQty: (id, qty) => dispatch(changeQty(id, qty)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
