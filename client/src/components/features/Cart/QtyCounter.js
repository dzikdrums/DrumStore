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
`;

const StyledButton = styled.button`
  background-color: transparent;
  outline: none;
  border-radius: 5px;
  font-size: 1.6rem;
  width: 25px;
  height: 25px;
  margin: 3px 0;
  cursor: pointer;
  border: 1px solid black;

  ${media.tablet`
      width: 30px;
      height: 30px;
    `}
`;

const StyledSpan = styled.span`
  font-weight: 400;
  font-size: 1.6rem;
  display: inline-block;
  text-align: center;
  width: 20px;

  ${media.tablet`
    font-size: 2rem;
  `}
`;

const StyledQtyWrapper = styled.div``;

const QtyCounter = ({ product, increaseCounter, decreaseCounter }) => {
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
};

export default QtyCounter;
