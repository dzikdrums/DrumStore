import Price from 'components/common/Price/Price';
import PriceOption from 'utils/PriceOption';
import PropTypes from 'prop-types';
import QtyCounter from 'components/features/Cart/QtyCounter';
import React from 'react';
import { media } from 'utils';
import styled from 'styled-components';
import trash from 'assets/trash.svg';

const RemoveButton = styled.img`
  width: 20px;
  height: 20px;
`;

const StyledTableBody = styled.td`
  text-align: left;
  color: black;
  font-weight: 400;
  border-bottom: 1px solid #ddd;
  padding: 5px 10px;
  text-transform: uppercase;

  ${media.tablet`
    max-width: 360px;
    min-width: 110px;
    `};
`;

const StyledImage = styled.img`
  height: 150px;
`;

const StyledRemoveButton = styled.button`
  margin: 0 auto;
  display: inline-block;
  width: 110px;
  background-color: transparent;
  border: none;
`;

const StyledProductContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CartItemTablet = ({ item, changeQty, minusCounter, plusCounter, handleDeleteProduct }) => {
  return (
    <tr key={item.id}>
      <StyledTableBody>
        <StyledProductContainer>
          <StyledImage src={item.img} />
          {item.name}
        </StyledProductContainer>
      </StyledTableBody>
      <StyledTableBody>
        <Price noalign="true" black>
          <PriceOption price={item.price} />
        </Price>
      </StyledTableBody>
      <StyledTableBody>
        <QtyCounter
          product={item}
          changeQty={changeQty}
          minusCounter={minusCounter}
          plusCounter={plusCounter}
        />
        <StyledRemoveButton>
          <RemoveButton src={trash} onClick={() => handleDeleteProduct(item.id)} />
        </StyledRemoveButton>
      </StyledTableBody>
      <StyledTableBody>
        <Price noalign="true" big="true">
          <PriceOption price={item.price * item.qty} />
        </Price>
      </StyledTableBody>
    </tr>
  );
};

CartItemTablet.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItemTablet;
