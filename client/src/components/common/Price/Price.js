import styled, { css } from 'styled-components';
import { media } from 'utils';

const Price = styled.h5`
  font-weight: 300;
  color: #e2231a;
  text-transform: uppercase;
  text-align: center;

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
`;

export default Price;
