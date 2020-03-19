import { BrowserRouter, NavLink } from 'react-router-dom';

import Fade from 'react-reveal/Fade';
import Paragraph from 'components/common/Paragraph/Paragraph';
import React from 'react';
import facebook from 'assets/facebook.svg';
import instagram from 'assets/instagram.svg';
import styled from 'styled-components';
import youtube from 'assets/youtube.svg';

const StyledWrapper = styled.div`
  padding: 5vw 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledIconWrapper = styled.div`
  padding: 2vw 0 4px;
  display: flex;
  justify-content: center;
`;

const StyledIcon = styled.img`
  height: 20px;
  margin: 0 10px;
`;

const StyledCopyrights = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
`;

const Footer = () => (
  <StyledWrapper data-testid="footer">
    <BrowserRouter>
      <Fade>
        <StyledIconWrapper>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
            <StyledIcon src={facebook} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
            <StyledIcon src={instagram} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/">
            <StyledIcon src={youtube} />
          </a>
        </StyledIconWrapper>
        <StyledCopyrights>
          <Paragraph as={NavLink} to="/privacy-policy" grey="true">
            Polityka prywatnosci
          </Paragraph>
          <Paragraph grey="true">© 2020 Drumstore. All right reserved</Paragraph>
        </StyledCopyrights>
      </Fade>
    </BrowserRouter>
  </StyledWrapper>
);

export default Footer;
