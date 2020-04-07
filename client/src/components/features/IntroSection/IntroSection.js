import Button from 'components/common/Button/Button';
import Fade from 'react-reveal/Fade';
import Heading from 'components/common/Heading/Heading';
import { NavLink } from 'react-router-dom';
import Paragraph from 'components/common/Paragraph/Paragraph';
import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 2vw 15px 40px;
`;

const StyledButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 5vw;
`;

const IntroSection = () => (
  <StyledWrapper>
    <Fade bottom>
      <Heading className="reveal">Hey, we&apos;re drumstore</Heading>
      <Paragraph big>
        We started this shop in 2011 as a way to give back to the drummers community. Now we are
        based in Buffalo, New York and make everyday efforts to help deliver the best products and
        service to peers just like us, drummers.
      </Paragraph>
      <StyledButtonWrapper>
        <Button as={NavLink} to="/about">
          more about us
        </Button>
      </StyledButtonWrapper>
    </Fade>
  </StyledWrapper>
);

export default IntroSection;
