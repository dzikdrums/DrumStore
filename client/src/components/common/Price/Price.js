import styled, { css } from 'styled-components';

import { media } from 'utils';

const Price = styled.h5`
  font-weight: 400;
  color: #e2231a;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 10px;
  font-size: 1.4rem;

  ${media.tablet`
    font-size: 1.8rem;
  `};

  ${media.desktop`
    font-size: 2rem;
  `};

  ${({ big }) =>
    big &&
    css`
      font-size: 1.4em;

      ${media.tablet`
        font-size: 1.8rem;
      `};

      ${media.desktop`
        font-size: 2rem;
      `};
    `}

  ${({ noalign }) =>
    noalign &&
    css`
      text-align: left;
    `}
`;

export default Price;
