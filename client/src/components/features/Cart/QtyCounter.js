import styled, { css } from 'styled-components';

import PropTypes from 'prop-types';
import React from 'react';

const StyledWrapper = styled.div`
  width: 100%;

  ${({ mobile }) =>
    mobile &&
    css`
      position: absolute;
      bottom: 10px;
      left: 130px;
    `}
`;

const StyledInnerWrapper = styled.div`
  margin-bottom: 10px;
`;

const StyledButton = styled.button`
  background-color: transparent;
  outline: none;
  font-size: 1.6rem;
  width: 30px;
  height: 30px;
  margin: 3px 0;
  cursor: pointer;
  border: 1px solid #d2d2d4;
`;

const StyledInput = styled.input`
  font-size: 1.6rem;
  text-align: center;
  width: 50px;
  height: 30px;
  border: 1px solid #d2d2d4;
  border-radius: 0;
  box-shadow: none !important;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const StyledQtyWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const QtyCounter = ({ product, plusCounter, minusCounter, changeQty, mobile }) => {
  const minus = () => {
    minusCounter(product.id);
  };

  const plus = () => {
    plusCounter(product.id);
  };

  const changeProductQty = e => {
    if (e.target.value) {
      return changeQty(product.id, parseInt(e.target.value, 10));
    }
    return changeQty(product.id, 0);
  };

  return (
    <StyledWrapper mobile={mobile}>
      <StyledInnerWrapper>
        <StyledQtyWrapper>
          {product.qty > 0 ? (
            <StyledButton onClick={() => minus()}>-</StyledButton>
          ) : (
            <StyledButton disabled onClick={() => minus()}>
              -
            </StyledButton>
          )}
          <StyledInput onChange={e => changeProductQty(e)} value={product.qty} />
          <StyledButton onClick={() => plus()}>+</StyledButton>
        </StyledQtyWrapper>
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
  plusCounter: PropTypes.func,
  minusCounter: PropTypes.func,
  changeQty: PropTypes.func.isRequired,
  mobile: PropTypes.string,
};

export default QtyCounter;
