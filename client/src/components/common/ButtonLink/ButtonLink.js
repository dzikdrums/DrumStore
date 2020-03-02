import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { media } from 'utils';

const ButtonLink = styled(NavLink)`
  border: 2px solid black;
  text-decoration: none;
  text-transform: uppercase;
  background-color: white;
  transition: all 170ms ease-in-out;
  color: black;
  font-size: 1rem;
  text-align: center;
  padding: 10px 30px;

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

export default ButtonLink;
