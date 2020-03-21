import React from 'react';
import { media } from 'utils';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  background-color: #efeff0;
  height: 40px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 850px;

  ${media.desktop`
    max-width: 900px;
  `}
`;

const StyledTitle = styled.span`
  color: #e2231a;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 300;
  white-space: nowrap;
  margin: 0 4px;

  ${media.tablet`
    font-size: 1.8rem;
    letter-spacing: 2.5px;
  `}
`;

const TopBar = () => (
  <StyledWrapper>
    <StyledTitle>Fast Shipping </StyledTitle>
    <StyledTitle> • Lifetime Warranty </StyledTitle>
    <StyledTitle>• 30-day returns</StyledTitle>
  </StyledWrapper>
);

export default TopBar;
