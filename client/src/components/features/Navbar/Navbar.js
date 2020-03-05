import React, { useEffect } from 'react';
import { getCart, setCart } from 'redux/productsRedux';

import CartIcon from 'components/common/CartIcon/CartIcon';
import Link from 'components/common/Link/Link';
import Login from 'assets/login.svg';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import USDflag from 'assets/USDflag.png';
import { connect } from 'react-redux';
import { media } from 'utils';
import styled from 'styled-components';

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

const Navbar = ({ cart, setCart }) => {
  const storage = JSON.parse(localStorage.getItem('cart')) || [];

  useEffect(() => {
    if (storage) {
      setCart(storage);
    }
  }, []);

  localStorage.setItem('cart', JSON.stringify(cart));

  return (
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
};

const mapStateToProps = state => ({
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  setCart: storage => dispatch(setCart(storage)),
});

Navbar.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setCart: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
