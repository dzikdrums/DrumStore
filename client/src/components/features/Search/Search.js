import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSearchValue } from 'redux/productsRedux';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  color: black;
  margin: 10px 0 0 10px;
  position: relative;
`;

const StyledInput = styled.input`
  color: black;
  padding: 9px 35px;
  width: 200px;
  outline: none;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 4px;
`;

const StyledSvg = styled.svg`
  position: absolute;
  z-index: 2;
  top: 5px;
  left: 5px;
  fill: #757575;
  width: 35px;
  height: 35px;
`;

const ICON =
  'M7.4 2.5c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9c1 0 1.8-.2 2.5-.8l3.7 3.7c.2.2.4.3.8.3.7 0 1.1-.4 1.1-1.1 0-.3-.1-.5-.3-.8L11.4 10c.4-.8.8-1.6.8-2.5.1-2.8-2.1-5-4.8-5zm0 1.6c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2-3.3-1.3-3.3-3.1 1.4-3.3 3.3-3.3z';

const Search = ({ setSearchValue }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setSearchValue(value);
  });

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <StyledWrapper>
      <StyledInput onChange={handleChange} value={value} />
      <StyledSvg viewBox="0 0 24 24">
        <path d={ICON} />
      </StyledSvg>
    </StyledWrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  setSearchValue: value => dispatch(setSearchValue(value)),
});

Search.propTypes = {
  setSearchValue: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Search);
