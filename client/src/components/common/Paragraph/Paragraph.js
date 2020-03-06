import styled, { css } from 'styled-components';

import { media } from 'utils';

const Paragraph = styled.p`
  font-size: 0.9rem;
  display: inline;
  font-weight: 300;
  padding-top: 3px;
  text-align: center;
  margin: 0;
  text-decoration: none;
  color: black ${media.tablet`
    font-size: 1.2rem;
  `};

  ${media.desktop`
    font-size: 1.6rem;
  `};

  ${({ grey }) =>
    grey &&
    css`
      color: rgba(34, 34, 34, 0.4);
    `}

  ${({ big }) =>
    big &&
    css`
      font-size: 1.4rem;

      ${media.tablet`
    font-size: 1.6rem;
  `};

      ${media.desktop`
    font-size: 1.8rem;
  `};
    `}
`;

export default Paragraph;
