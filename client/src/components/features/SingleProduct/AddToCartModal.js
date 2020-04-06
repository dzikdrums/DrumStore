import React, { useState } from 'react';

import Button from 'components/common/Button/Button';
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

const StyledSpan = styled.span`
  padding: 20px 20px 0;
`;

const AddToCartModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <StyledModal isOpen={isOpen} onBackgroundClick={toggleModal} onEscapeKeydown={toggleModal}>
        <StyledSpan>Added to cart!</StyledSpan>
        <Button onClick={toggleModal}>continue shopping</Button>
      </StyledModal>
    </>
  );
};

export default AddToCartModal;
