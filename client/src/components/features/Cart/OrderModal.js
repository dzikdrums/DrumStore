import Modal from 'styled-react-modal';
import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import CartButton from 'components/common/CartButton/CartButton';
import { resetCart, calculatePrice } from 'redux/productsRedux';
import PropTypes from 'prop-types';

const StyledModal = Modal.styled`
  z-index: 9999;
  width: 60%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  transition: 1s ease-in-out;
  padding: 20px;

`;

const StyledWrapper = styled.div`
  margin-left: auto;
`;

const OrderModal = ({ resetCart, calculatePrice }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
    resetCart();
    localStorage.clear();
    calculatePrice();
  }

  return (
    <StyledWrapper>
      <CartButton onClick={toggleModal}>order</CartButton>
      <StyledModal isOpen={isOpen} onBackgroundClick={toggleModal} onEscapeKeydown={toggleModal}>
        <span>Your order has been placed!</span>
        <CartButton onClick={toggleModal}>close</CartButton>
      </StyledModal>
    </StyledWrapper>
  );
};

OrderModal.propTypes = {
  resetCart: PropTypes.func.isRequired,
  calculatePrice: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  resetCart: () => dispatch(resetCart()),
  calculatePrice: () => dispatch(calculatePrice()),
});

export default connect(null, mapDispatchToProps)(OrderModal);
