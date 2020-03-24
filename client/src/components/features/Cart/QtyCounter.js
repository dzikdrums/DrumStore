import PropTypes from 'prop-types';
import React from 'react';
import { media } from 'utils';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
`;

const StyledInnerWrapper = styled.div`
  width: 140px;
  margin-bottom: 10px;
  align-items: center;
  display: flex;
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

  ${media.tablet`
    font-size: 1.6rem;
  `}
`;

const StyledQtyWrapper = styled.div``;

const QtyCounter = ({ product, increaseCounter, decreaseCounter, changeQty }) => {
  const minus = () => {
    decreaseCounter(product.id);
  };

  const plus = () => {
    increaseCounter(product.id);
  };

  const changeProductQty = e => {
    if (e.target.value) {
      return changeQty(product.id, parseInt(e.target.value, 10));
    }
    return changeQty(product.id, 0);
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
  increaseCounter: PropTypes.func.isRequired,
  decreaseCounter: PropTypes.func.isRequired,
  changeQty: PropTypes.func.isRequired,
};

export default QtyCounter;
