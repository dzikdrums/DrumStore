import React from 'react';
import styled from 'styled-components';
import logo from 'assets/logo.svg';

const StyledLogo = styled.img`
  width: 40px;
  height: 40px;
  margin: 7px 20px 0;
`;

const Logo = () => <StyledLogo src={logo} />;

export default Logo;
