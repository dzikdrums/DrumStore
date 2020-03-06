import React, { useState } from 'react';

import CartButton from 'components/common/CartButton/CartButton';
import Modal from 'styled-react-modal';
/* eslint-disable no-unused-vars */
import styled from 'styled-components';

/* eslint-enable */

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

const OrderModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <StyledModal isOpen={isOpen} onBackgroundClick={toggleModal} onEscapeKeydown={toggleModal}>
        <span>Your order has been placed!</span>
        <CartButton onClick={toggleModal}>close</CartButton>
      </StyledModal>
    </div>
  );
};

export default OrderModal;
