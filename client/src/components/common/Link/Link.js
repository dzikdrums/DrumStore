import styled, { css } from 'styled-components';

import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  font-size: 1.6rem;
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
      font-size: 2rem;
      font-weight: 600;

      &.active {
        color: black;
      }
    `}
`;

export default Link;
