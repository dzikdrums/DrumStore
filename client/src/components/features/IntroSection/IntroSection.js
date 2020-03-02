import React from 'react';
import styled from 'styled-components';
import ButtonLink from 'components/common/ButtonLink/ButtonLink';
import Heading from 'components/common/Heading/Heading';
import Paragraph from 'components/common/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  padding: 4vw 15px 70px;
`;

const StyledButtonLinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 5vw;
`;

const IntroSection = () => (
  <StyledWrapper>
    <Heading>Hey, we`&apos;`re drumstore</Heading>
    <Paragraph big>
      We started this shop in 2011 as a way to give back to the drummers community. Now we are based
      in Buffalo, New York and make everyday efforts to help deliver the best products and service
      to peers just like us, drummers.
    </Paragraph>
    <StyledButtonLinkWrapper>
      <ButtonLink to="/about">more about us</ButtonLink>
    </StyledButtonLinkWrapper>
  </StyledWrapper>
);

export default IntroSection;
