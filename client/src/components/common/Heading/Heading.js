import styled, { css } from 'styled-components';

import { media } from 'utils';

const Heading = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 400;
  text-align: center;
  margin: 0 auto;
  padding: 20px 0;

  ${media.tablet`
    font-size: 2.2rem;
    padding-top: 30px;
  `};

  ${media.desktop`
    font-size: 2.4rem;
    padding-top: 50px;
  `};

  ${({ small }) =>
    small &&
    css`
      font-size: 1em;

      ${media.tablet`
        font-size: 1.6rem;
      `};

      ${media.desktop`
        font-size: 2rem;
      `};
    `}
`;

export default Heading;
