import React, { useState } from 'react';

import ButtonLink from 'components/common/ButtonLink/ButtonLink';
import CartButton from 'components/common/CartButton/CartButton';
import Heading from 'components/common/Heading/Heading';
import Modal from 'styled-react-modal';
import { media } from 'utils';
/* eslint-disable no-unused-vars */
import styled from 'styled-components';

/* eslint-enable */

const StyledModal = Modal.styled`
  z-index: 9999;
  width: 90%;
  max-width: 300px;
  height: 23%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  transition: 1s ease-in-out;
  padding: 20px;

  ${media.tablet`
  max-width: 450px;
`}
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  justify-content: space-justify-content;
  height: 80px;
  width: 100%;
  margin: 0 0 15px;

  ${media.tablet`
    height:100px;
  `}
`;

const AddToCartModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <StyledModal isOpen={isOpen} onBackgroundClick={toggleModal} onEscapeKeydown={toggleModal}>
        <Heading>Added to cart!</Heading>
        <StyledInnerWrapper>
          <ButtonLink to="/cart" onClick={toggleModal}>
            cart
          </ButtonLink>
          <CartButton to="/cart" onClick={toggleModal}>
            continue shopping
          </CartButton>
        </StyledInnerWrapper>
      </StyledModal>
    </div>
  );
};

export default AddToCartModal;
