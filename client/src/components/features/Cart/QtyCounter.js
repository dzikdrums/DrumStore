import styled, { css } from 'styled-components';

import PropTypes from 'prop-types';
import React from 'react';
import { media } from 'utils';

const StyledWrapper = styled.div`
  width: 50%;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const StyledButton = styled.button`
  background-color: transparent;
  outline: none;
  border-radius: 5px;
  font-size: 1.6rem;
  width: 30px;
  height: 30px;
  margin-top: 3px;
  cursor: pointer;
  border: 1px solid black;

  ${media.tablet`
      width: 40px;
      height: 40px;
    `}

  ${({ remove }) =>
    remove &&
    css`
      width: 75px;

      ${media.tablet`
      width: 95px;
      height: 35px;
    `}
    `}
`;

const StyledSpan = styled.span`
  font-weight: 300;
  font-size: 1.2rem;
  margin: 0 5px;
`;

const StyledQtyWrapper = styled.div``;

const QtyCounter = ({ deleteProduct, product, increaseCounter, decreaseCounter }) => {
  const remove = () => {
    deleteProduct(product.id);
  };

  const minus = () => {
    decreaseCounter(product.id);
  };

  const plus = () => {
    increaseCounter(product.id);
  };

  return (
    <StyledWrapper>
      <StyledInnerWrapper>
        <StyledQtyWrapper>
          {product.qty > 0 ? (
            <StyledButton onClick={() => minus()}>-</StyledButton>
          ) : (
            <StyledButton disabled onClick={() => minus()}>
              -
            </StyledButton>
          )}
          <StyledSpan>{product.qty}</StyledSpan>
          <StyledButton onClick={() => plus()}>+</StyledButton>
        </StyledQtyWrapper>
        <StyledButton remove="true" onClick={() => remove()}>
          delete
        </StyledButton>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

QtyCounter.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired,
  }).isRequired,
  increaseCounter: PropTypes.func.isRequired,
  decreaseCounter: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};

export default QtyCounter;
