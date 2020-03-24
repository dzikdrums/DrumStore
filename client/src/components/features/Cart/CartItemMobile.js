import Price from 'components/common/Price/Price';
import PriceOption from 'utils/PriceOption';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;

const StyledInnerWrapper = styled.div`
  width: 100%;
`;

const StyledImage = styled.img`
  height: 100px;
`;

const StyledImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledName = styled.h3`
  margin: 0 0 15px;
  font-size: 1.6rem;
  font-weight: 400;
`;

const StyledRemove = styled.button`
  margin-top: 4px;
  font-size: 1rem;
  color: rgba(34, 34, 34, 0.8);
`;

const CartItemMobile = ({ id, img, name, price, handleDeleteProduct }) => (
  <StyledWrapper>
    <StyledImageWrapper>
      <StyledImage src={img} />
      <StyledRemove onClick={() => handleDeleteProduct(id)}>(remove item)</StyledRemove>
    </StyledImageWrapper>

    <StyledInnerWrapper>
      <StyledName>{name}</StyledName>
      <Price noalign="true">
        <PriceOption price={price} />
      </Price>
    </StyledInnerWrapper>
  </StyledWrapper>
);

CartItemMobile.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleDeleteProduct: PropTypes.func.isRequired,
};

export default CartItemMobile;
