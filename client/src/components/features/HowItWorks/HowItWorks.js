import React from 'react';
import { media } from 'utils';
import step1 from 'assets/step-1.png';
import step2 from 'assets/step-2.png';
import step3 from 'assets/step-3.png';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 21px;
  margin: 30px 0 50px;

  ${media.tablet`
    display: flex;
    margin: 60px 0;
  `}
`;

const StyledTitle = styled.h3`
  color: #00c189;
  font-weight: 700;
  margin-top: 0;
`;

const StyledSubtitle = styled.h4`
  font-size: 31px;
  font-weight: 500;
  margin: 0;
  line-height: 40px;
`;

const StyledPeriodWrapper = styled.div`
  color: black;
  display: flex;
  margin-top: 40px;

  ${media.tablet`
    margin: 0 0 40px;
  `}
`;

const StyledDescription = styled.p`
  font-weight: 300;
`;

const StyledStepDescription = styled.div`
  width: 65%;
  padding-left: 5px;
  line-height: 20px;
`;

const StyledImageWrapper = styled.div`
  width: 35%;
  text-align: center;
`;

const StyledImage = styled.img`
  color: black;
  height: 60px;
  margin: 0 auto;
`;

const StyledSectionName = styled.p`
  color: black;
  margin: 60px 0;
  position: relative;
  padding-left: 18px;
  font-weight: 500;
  font-size: 1.6rem;

  ::before {
    content: '';
    position: absolute;
    top: -14px;
    left: 1px;
    height: 250%;
    width: 50px;
    background: #00c189;
    opacity: 0.2;
    border-radius: 2rem;
    transition: all 0.3s ease;
  }

  ::after {
  }
`;

const HowItWorks = () => (
  <StyledWrapper>
    <div>
      <StyledTitle>How it works</StyledTitle>
      <StyledSubtitle>On-demand and tailored to you</StyledSubtitle>
      <StyledDescription>
        Tell us what You need, how many You need, and when You need. You&apos;ll then receive a
        package straight to Your doosteps.
      </StyledDescription>
      <StyledSectionName>How it works </StyledSectionName>
    </div>
    <div>
      <StyledPeriodWrapper>
        <StyledImageWrapper>
          <StyledImage src={step1} />
        </StyledImageWrapper>
        <StyledStepDescription>
          <StyledTitle>You order</StyledTitle>
          <StyledDescription>
            You build a unique product list suited to Your needs.
          </StyledDescription>
        </StyledStepDescription>
      </StyledPeriodWrapper>
      <StyledPeriodWrapper>
        <StyledImageWrapper>
          <StyledImage src={step2} />
        </StyledImageWrapper>
        <StyledStepDescription>
          <StyledTitle>We prepare</StyledTitle>
          <StyledDescription>
            Our employees gather products for You, and we inform You on every step of the way.{' '}
          </StyledDescription>
        </StyledStepDescription>
      </StyledPeriodWrapper>
      <StyledPeriodWrapper>
        <StyledImageWrapper>
          <StyledImage src={step3} />
        </StyledImageWrapper>
        <StyledStepDescription>
          <StyledTitle>You receive</StyledTitle>
          <StyledDescription>
            You receive Your package almost instantly to given address. Its protected and sealed for
            safety.{' '}
          </StyledDescription>
        </StyledStepDescription>
      </StyledPeriodWrapper>
    </div>
  </StyledWrapper>
);

export default HowItWorks;
