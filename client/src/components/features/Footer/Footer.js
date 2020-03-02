import React from 'react';
import styled from 'styled-components';
import youtube from 'assets/youtube.svg';
import facebook from 'assets/facebook.svg';
import instagram from 'assets/instagram.svg';
import Paragraph from 'components/common/Paragraph/Paragraph';

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
  <StyledWrapper>
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
      <Paragraph grey>Polityka prywatnosci</Paragraph>
      <Paragraph grey>© 2020 Drumstore. All right reserved</Paragraph>
    </StyledCopyrights>
  </StyledWrapper>
);

export default Footer;
