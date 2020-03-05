import Modal from 'styled-react-modal';
import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import CartButton from 'components/common/CartButton/CartButton';
import { resetCart } from 'redux/productsRedux';

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

`;

const StyledWrapper = styled.div`
  margin-left: auto;
`;

const FancyModalButton = () => {
  const [isOpen, setIsOpen] = useState(true);

  function toggleModal(e) {
    setIsOpen(!isOpen);
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

const mapDispatchToProps = dispatch => ({
  resetCart: () => dispatch(resetCart()),
});

export default connect(null, mapDispatchToProps)(FancyModalButton);
