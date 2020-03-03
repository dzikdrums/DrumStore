import styled, { css } from 'styled-components';
import { media } from 'utils';

const Heading = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;

  ${media.tablet`
    font-size: 2.2rem;
  `};

  ${media.desktop`
    font-size: 2.4rem;
  `};

  ${({ small }) =>
    small &&
    css`
      font-size: 0.7em;

      ${media.tablet`
        font-size: 1.8rem;
      `};

      ${media.desktop`
        font-size: 2rem;
      `};
    `}
`;

export default Heading;
