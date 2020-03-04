import styled from 'styled-components';
import { media } from 'utils';

const CartButton = styled.button`
  border: 2px solid black;
  text-decoration: none;
  text-transform: uppercase;
  background-color: white;
  transition: all 170ms ease-in-out;
  color: black;
  font-size: 1rem;
  text-align: center;
  padding: 10px 30px;
  max-width: 200px;
  margin: 20px auto 5px;

  :hover {
    background-color: black;
    color: white;
  }

  ${media.tablet`
    font-size: 1.4rem;
  `};

  ${media.desktop`
    font-size: 1.5rem;
  `};
`;

export default CartButton;
