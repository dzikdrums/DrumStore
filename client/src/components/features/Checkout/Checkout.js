import CheckoutForm from './CheckoutForm';
import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

const Checkout = () => {
  return (
    <StyledWrapper>
      <CheckoutForm />
    </StyledWrapper>
  );
};

export default Checkout;
