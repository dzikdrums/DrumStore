import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Link = styled(NavLink)`
  font-size: 14px;
  text-decoration: none;
  color: black;
  transition: color 170ms ease-in-out;
  font-weight: 300;

  :hover {
    color: rgba(34, 34, 34, 0.4);
  }

  ${({ logo }) =>
    logo &&
    css`
      font-size: 20px;
      font-weight: 600;

      &.active {
        color: black;
      }
    `}
`;

export default Link;
