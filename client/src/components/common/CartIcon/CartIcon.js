import React from 'react';
import PropTypes from 'prop-types';
import Cart from 'assets/cart.svg';
import styled from 'styled-components';

const StyledWrapper = styled.span`
  display: inline-block;
  color: black;
  position: relative;
  width: 30px;
  height: 25px;
`;

const StyledIcon = styled.img`
  width: 20px;
  background-color: transparent;
`;

const StyledSpan = styled.span`
  position: absolute;
  color: black;
  bottom: 0;
  right: 0;
  font-size: 1.2rem;
`;

const CartIcon = ({ itemsQty }) => (
  <StyledWrapper>
    <StyledIcon src={Cart} />
    <StyledSpan>{itemsQty}</StyledSpan>
  </StyledWrapper>
);

CartIcon.propTypes = {
  itemsQty: PropTypes.number.isRequired,
};

export default CartIcon;
