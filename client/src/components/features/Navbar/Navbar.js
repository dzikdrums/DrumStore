import React from 'react';
import Login from 'assets/login.svg';
import USDflag from 'assets/USDflag.png';
import Link from 'components/common/Link/Link';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { media } from 'utils';
import { connect } from 'react-redux';
import { getCart } from 'redux/productsRedux';
import CartIcon from 'components/common/CartIcon/CartIcon';
import PropTypes from 'prop-types';

const StyledWrapper = styled.nav`
  height: 100px;
  min-width: 330px;
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  padding: 10px 30px 2px;
  position: fixed;
  max-width: 900px;
  width: 100%;
  top: 0;
  z-index: 1;

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
  flex-wrap: nowrap;
  flex-direction: row;
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
`;

const Navbar = ({ cart }) => (
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
          <CartIcon itemsQty={cart.length} />
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

const mapStateToProps = state => ({
  cart: getCart(state),
});

Navbar.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      img: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default connect(mapStateToProps)(Navbar);
