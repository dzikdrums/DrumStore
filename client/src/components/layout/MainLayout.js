import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import Navbar from 'components/features/Navbar/Navbar';
import Footer from 'components/features/Footer/Footer';
import { media } from 'utils';

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 100px;

  ${media.tablet`
    max-width: 850px;
  `};

  ${media.desktop`
    max-width: 900px;
  `};
`;

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <StyledWrapper>
      <Navbar />
      {children}
      <Footer />
    </StyledWrapper>
  </>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
