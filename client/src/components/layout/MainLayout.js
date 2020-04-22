import Footer from 'components/features/Footer/Footer';
import GlobalStyle from 'theme/GlobalStyle';
import Navbar from 'components/features/Navbar/Navbar';
import PropTypes from 'prop-types';
import React from 'react';
import { media } from 'utils';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const StyledInnerWrapper = styled.div`
  width: 100%;
  min-width: 330px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 160px;

  ${media.tablet`
    max-width: 850px;
  `};

  ${media.desktop`
    max-width: 900px;
  `};
`;

const MainLayout = ({ children }) => (
  <StyledWrapper>
    <GlobalStyle />
    <StyledInnerWrapper>
      <Navbar />
      {children}
      <Footer />
    </StyledInnerWrapper>
  </StyledWrapper>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
