import ProductCard from 'components/features/ProductCard/ProductCard';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 30px;
  margin-bottom: 50px;
`;

const ProductsList = ({ products }) => (
  <StyledWrapper>
    {products.map(product => (
      <ProductCard key={product.id} {...product} />
    ))}
  </StyledWrapper>
);

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ),
};

export default ProductsList;
