import { Back, gsap } from 'gsap';
import React, { createRef, useEffect, useState } from 'react';
import { currencyChange, getCart, setCart } from 'redux/productsRedux';
import styled, { css } from 'styled-components';

import CartIcon from 'components/common/CartIcon/CartIcon';
import Link from 'components/common/Link/Link';
import Login from 'assets/login.svg';
import { NavLink } from 'react-router-dom';
import PLNflag from 'assets/PLNflag.png';
import PropTypes from 'prop-types';
import Select from 'react-select';
import TopBar from 'components/features/TopBar/TopBar';
import USDflag from 'assets/USDflag.png';
import { connect } from 'react-redux';
import { media } from 'utils';

const StyledNavTopWrapper = styled.div`
  background-color: white;
  position: fixed;
  z-index: 2;
  width: 100%;
`;

const StyledTopBar = styled(TopBar)`
  transition: transform 0.3s;
  position: fixed;
  top: 0;
`;

const StyledWrapper = styled.nav`
  height: 160px;
  min-width: 330px;
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  border-bottom: solid 1px #d1d1d1;
  max-width: 850px;
  transition: transform 0.3s;

  ${media.tablet`
    width: 100%;
  `}

  ${media.desktop`
    max-width: 900px;
  `};

  ${({ hidden }) =>
    hidden &&
    css`
      transform: translateY(-40px);
    `}
`;

const StyledLogo = styled(Link)`
  transform: translateY(-200px);
  display: inline-block;
`;

const IconsInnerWrapper = styled.div`
  display: inline-block;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  padding: 10px 20px;
  max-width: 1000px;
`;

const LinksInnerWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  padding: 0 20px;
  max-width: 1000px;
`;

const StyledIcon = styled.img`
  width: 20px;
  padding-top: 5px;
  margin: 0 25px 0 5px;
  background-color: transparent;
`;

const StyledFlagIcon = styled.img`
  width: 20px;
  margin: 0 2px;
  background-color: transparent;
  margin-bottom: 3px;
`;

const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSelect = styled(Select)`
  padding: 5px 5px 0;
  width: 115px;
  outline: none;
  margin: 0 auto;

  ${media.tablet`
    margin: 0;
  `}
`;

const StyledLabel = styled.div`
  color: black;
  display: flex;
  align-items: center;
  font-size: 1rem;

  span {
    margin-left: 10px;
  }
`;

const Navbar = ({ cart, currencyChange }) => {
  const currency = localStorage.getItem('currency');
  localStorage.setItem('cart', JSON.stringify(cart));

  const options = [
    {
      value: 'USD',
      label: (
        <StyledLabel>
          <StyledFlagIcon src={USDflag} />
          <span>USD</span>
        </StyledLabel>
      ),
    },
    {
      value: 'PLN',
      label: (
        <StyledLabel>
          <StyledFlagIcon src={PLNflag} />
          <span>PLN</span>
        </StyledLabel>
      ),
    },
  ];

  const [selectedOption, setSelectedOption] = useState(
    currency === 'USD' ? options[0] : options[1],
  );

  const [visible, setVisible] = useState(true);

  let logo = createRef();

  const handleScroll = () => {
    const pageOffset = window.pageYOffset === 0;
    setVisible(pageOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    gsap.to(logo, 1, { y: 200, ease: Back.easeOut.config(2) });
    currencyChange(selectedOption.value);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    currencyChange(selectedOption.value);
    window.localStorage.setItem('currency', selectedOption.value);
  };

  const customStyles = {
    option: provided => ({
      ...provided,
      color: 'blue',
      padding: 5,
      border: 'none',
    }),
    control: (base, state) => ({
      ...base,
      border: state.isFocused ? 0 : 0,
      boxShadow: state.isFocused ? 0 : 0,
      '&:hover': {
        border: state.isFocused ? 0 : 0,
      },
    }),
  };

  return (
    <StyledNavTopWrapper>
      <StyledWrapper hidden={!visible}>
        <StyledTopBar hidden={!visible} />
        <IconsInnerWrapper>
          <div
            ref={el => {
              logo = el;
            }}
          >
            <StyledLogo logo="true" to="/">
              DrumStore
            </StyledLogo>
          </div>
          <StyledIconWrapper>
            <StyledSelect
              styles={customStyles}
              value={{ label: selectedOption.label }}
              onChange={handleChange}
              options={options}
              isSearchable={false}
            />
            <Link to="/login">
              <StyledIcon src={Login} />
            </Link>
            <NavLink to="/cart">
              <CartIcon itemsQty={cart.length} />
            </NavLink>
          </StyledIconWrapper>
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
    </StyledNavTopWrapper>
  );
};

const mapStateToProps = state => ({
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  setCart: storage => dispatch(setCart(storage)),
  currencyChange: currency => dispatch(currencyChange(currency)),
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
  currencyChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
