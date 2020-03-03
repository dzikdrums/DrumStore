import styled, { css } from 'styled-components';

const CartButton = styled.button`
  background-color: #e2231a;
  padding: 5px 90px;
  color: white;
  font-weight: 400;
  border-radius: 10px;
  outline: none;
  margin: 0 auto;
  text-transform: uppercase;

  ${({ card }) =>
    card &&
    css`
      padding: 5px 20px;
      font-size: 1.4rem;
      font-weight: 300;
    `};
`;

export default CartButton;
