import Cart from 'assets/cart.svg';
import PropTypes from 'prop-types';
import React from 'react';
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
  position: absolute;
  top: 7px;
`;

const StyledSpan = styled.span`
  position: absolute;
  color: black;
  bottom: -5px;
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
