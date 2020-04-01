import styled, { css } from 'styled-components';

import { media } from 'utils';

const Price = styled.h5`
  font-weight: 300;
  text-align: center;
  margin: 5px 0;
  font-size: 1.6rem;
  color: #e2231a;
  white-space: nowrap;

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

    ${({ black }) =>
      black &&
      css`
        color: black;
      `}
`;

export default Price;
