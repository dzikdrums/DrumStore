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

const ProductsList = ({ products, currency, rate, comments, searchValue }) => {
  let filteredProducts = [];

  if (searchValue) {
    filteredProducts = products.filter(product => {
      const productName = product.name.toLowerCase();
      return productName.indexOf(searchValue.toLowerCase()) !== -1;
    });
  }

  const productList = filteredProducts.length > 0 ? filteredProducts : products;

  return (
    <StyledWrapper>
      {productList.map(product => (
        <ProductCard
          currency={currency}
          comments={comments}
          rate={rate}
          key={product.id}
          {...product}
        />
      ))}
    </StyledWrapper>
  );
};

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ),
  currency: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  comments: PropTypes.array,
  searchValue: PropTypes.string,
};

export default ProductsList;
