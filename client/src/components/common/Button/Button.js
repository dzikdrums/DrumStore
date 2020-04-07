import styled, { css } from 'styled-components';

import { media } from 'utils';

const Button = styled.button`
  border: 2px solid #00c189;
  text-decoration: none;
  text-transform: uppercase;
  background-color: white;
  transition: all 400ms ease-in-out;
  color: black;
  font-size: 1.4rem;
  outline: none;
  text-align: center;
  padding: 15px 20px;
  max-width: 200px;
  min-width: 150px;
  cursor: pointer;
  margin: 20px auto 15px;

  :hover {
    background-color: #00c189;
    color: white;
  }

  ${({ reverse }) =>
    reverse &&
    css`
      background-color: black;
      color: white;
      cursor: auto;
    `};

  ${({ smallLetters }) =>
    smallLetters &&
    css`
      text-transform: none;
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
