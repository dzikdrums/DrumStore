import React from 'react';
import Cart from 'assets/cart.svg';
import Login from 'assets/login.svg';
import USDflag from 'assets/USDflag.png';
import Link from 'components/common/Link/Link';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { media } from 'utils';

const StyledWrapper = styled.nav`
  height: 100px;
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  padding: 10px 30px 2px;
  position: fixed;
  max-width: 900px;
  width: 100%;
  top: 0;
  z-index: 9999;

  ${media.tablet`
    max-width: 850px;
  `};

  ${media.desktop`
    max-width: 900px;
  `};
`;

const IconsInnerWrapper = styled.div`
  display: inline-block;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  padding-top: 10px;
  max-width: 1000px;
`;

const LinksInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  padding: 0 10px;
  max-width: 1000px;
`;

const StyledIcon = styled.img`
  width: 20px;
  margin: 0 10px;
  background-color: transparent;
  transition: color 170ms ease-in-out;
`;

const Navbar = () => (
  <StyledWrapper>
    <IconsInnerWrapper>
      <div>
        <Link logo="true" to="/">
          DrumStore
        </Link>
      </div>
      <div>
        <StyledIcon src={USDflag} />
        <NavLink to="/login">
          <StyledIcon src={Login} />
        </NavLink>
        <NavLink to="/cart">
          <StyledIcon src={Cart} />
        </NavLink>
      </div>
    </IconsInnerWrapper>
    <LinksInnerWrapper>
      <Link exact to="/drums" activeclass="active">
        drums
      </Link>
      <Link exact to="/cymbals" activeclass="active">
        cymbals
      </Link>
      <Link exact to="/contact" activeclass="active">
        contact
      </Link>
      <Link exact to="/about" activeclass="active">
        about us
      </Link>
    </LinksInnerWrapper>
  </StyledWrapper>
);

export default Navbar;
