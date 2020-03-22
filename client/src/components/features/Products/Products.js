import React, { useEffect, useState } from 'react';
import {
  getCurrency,
  getExchangeRate,
  getProductsSort,
  getRequest,
  loadCurrencyRates,
  loadProductsByCategoryRequest,
  sortOptions,
} from 'redux/productsRedux';

import ProductsList from 'components/features/ProductsList/ProductsList';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Spinner from 'components/common/Spinner/Spinner';
import { connect } from 'react-redux';
import { media } from 'utils';
import styled from 'styled-components';

const StyledSpinnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledSelect = styled(Select)`
  padding: 10px 35px 0;
  max-width: 300px;
  outline: none;
  margin: 0 auto;
  z-index: 3;

  ${media.tablet`
    margin: 0;
  `}
`;

const Products = ({
  category,
  products,
  request,
  loadProductsByCategoryRequest,
  sortOptions,
  currency,
  loadCurrencyRates,
  exchangeRate,
}) => {
  useEffect(() => {
    loadProductsByCategoryRequest(category);
    loadCurrencyRates();
  }, []);

  const options = [
    { value: { key: '', direction: '' }, label: 'Newest' },
    { value: { key: 'price', direction: 'desc' }, label: 'Highest price' },
    { value: { key: 'price', direction: 'asc' }, label: 'Lowest price' },
    { value: { key: 'name', direction: 'desc' }, label: 'Name desc' },
    { value: { key: 'name', direction: 'asc' }, label: 'Name asc' },
  ];

  const [selectedOption, setSelectedOption] = useState({ label: 'Newest' });

  const sortHandler = ({ value: { key, direction } }) => {
    sortOptions({ key, direction });
  };

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    sortHandler(selectedOption);
  };

  const customStyles = {
    option: provided => ({
      ...provided,
    }),
  };

  if (request.pending === false && request.success === true && products.length > 0)
    return (
      <div>
        <StyledSelect
          placeholder="Sort"
          value={{ label: selectedOption.label }}
          onChange={handleChange}
          styles={customStyles}
          options={options}
          isSearchable={false}
        />
        <ProductsList rate={exchangeRate} currency={currency} products={products} />
      </div>
    );
  return (
    <StyledSpinnerWrapper>
      <Spinner />
    </StyledSpinnerWrapper>
  );
};

const mapStateToProps = state => ({
  products: getProductsSort(state),
  request: getRequest(state),
  currency: getCurrency(state),
  exchangeRate: getExchangeRate(state),
});

const mapDispatchToProps = dispatch => ({
  loadProductsByCategoryRequest: category => dispatch(loadProductsByCategoryRequest(category)),
  sortOptions: ({ key, direction }) => dispatch(sortOptions({ key, direction })),
  loadCurrencyRates: () => dispatch(loadCurrencyRates()),
});

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
    }),
  ),
  category: PropTypes.string.isRequired,
  loadProductsByCategoryRequest: PropTypes.func.isRequired,
  loadCurrencyRates: PropTypes.func.isRequired,
  request: PropTypes.shape({
    pending: PropTypes.bool.isRequired,
    error: PropTypes.bool,
    success: PropTypes.bool,
  }),
  currency: PropTypes.string.isRequired,
  sortOptions: PropTypes.func.isRequired,
  exchangeRate: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
