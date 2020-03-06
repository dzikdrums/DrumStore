import styled, { css } from 'styled-components';

import { media } from 'utils';

const Button = styled.button`
  border: 2px solid black;
  text-decoration: none;
  text-transform: uppercase;
  background-color: white;
  transition: all 400ms ease-in-out;
  color: black;
  font-size: 1rem;
  text-align: center;
  padding: 15px 20px;
  max-width: 200px;
  margin: 20px auto 15px;

  :hover {
    background-color: black;
    color: white;
  }

  ${({ reverse }) =>
    reverse &&
    css`
      background-color: black;
      color: white;
    `};

  ${media.tablet`
    font-size: 1.4rem;
    padding: 22px 20px;
  `};

  ${media.desktop`
    font-size: 1.5rem;
  `};
`;

export default Button;
