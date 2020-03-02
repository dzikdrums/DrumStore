import React from 'react';
import { css } from '@emotion/core';
import { PulseLoader } from 'react-spinners';
import PropTypes from 'prop-types';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = ({ loading }) => (
  <div className="sweet-loading">
    <PulseLoader css={override} size={15} color="#333" loading={loading} />
  </div>
);

Spinner.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Spinner;
