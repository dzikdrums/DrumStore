import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { media } from 'utils';
import OrderModal from 'components/features/Cart/OrderModal';

const StyledWrapper = styled.div`
  margin: 10px auto;
  width: 80%;
  display: flex;
  flex-direction: column;

  ${media.desktop`
    width: 60%;
    display: flex;
    justify-content: flex-end;
  `}
`;

const StyledInnerWrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 30px;
  margin-left: auto;

  ${media.tablet`
    width: 40%;
  `}
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

const StyledPriceName = styled.span``;

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
      <OrderModal />
    </StyledWrapper>
  );
};

CartSummary.propTypes = {
  price: PropTypes.number,
};

export default CartSummary;
