import React from 'react';
import { css } from '@emotion/core';
import { PulseLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = () => (
  <div className="sweet-loading">
    <PulseLoader css={override} size={15} color="#333" />
  </div>
);

export default Spinner;
