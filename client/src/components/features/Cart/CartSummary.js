import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  width: 100%;
  margin: 10px 0;
`;

const StyledInnerWrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 30px;
`;

const StyledPriceGroup = styled.div`
  color: black;
  display: flex;
  justify-content: space-between;
  font-weight: 300;
  margin-top: 2px;
  font-size: 1.8rem;

  ${({ total }) =>
    total &&
    css`
      font-weight: 500;
      margin-top: 5px;
      font-size: 2rem;
    `};
`;

const StyledPrice = styled.span`
  font-weight: 300;
`;

const StyledPriceName = styled.span`
  color: black;
`;

const CartSummary = ({ price }) => {
  return (
    <StyledWrapper>
      <StyledInnerWrapper>
        <StyledPriceGroup>
          <StyledPriceName>Subtotal</StyledPriceName>
          <StyledPrice>${price}</StyledPrice>
        </StyledPriceGroup>
        <StyledPriceGroup>
          <StyledPriceName>Delivery</StyledPriceName>
          <StyledPrice>$15</StyledPrice>
        </StyledPriceGroup>
        <StyledPriceGroup total="true">
          <StyledPriceName>Order total</StyledPriceName>
          <StyledPrice>${price + 15}</StyledPrice>
        </StyledPriceGroup>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

CartSummary.propTypes = {
  price: PropTypes.number,
};

export default CartSummary;
