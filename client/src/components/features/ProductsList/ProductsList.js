import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from 'components/features/ProductCard/ProductCard';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  color: black;
`;

const ProductsList = ({ products }) => (
  <StyledWrapper>
    {products.map(product => (
      <ProductCard key={product.id} {...product} />
    ))}
    ;
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
