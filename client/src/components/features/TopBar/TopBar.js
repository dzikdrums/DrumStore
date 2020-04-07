import React, { createRef, useEffect } from 'react';

import { gsap } from 'gsap';
import { media } from 'utils';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  z-index: 1;
  background-color: #efeff0;
  height: 40px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 850px;
  padding: 15px;

  ${media.desktop`
    max-width: 900px;
  `}
`;

const StyledTitle = styled.span`
  color: #00c189;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 400;
  white-space: nowrap;
  margin: 0 4px;
  transform: scaleY(0);
  transform-origin: bottom;

  ${media.tablet`
    font-size: 1.8rem;
    letter-spacing: 2.5px;
  `}
`;

const TopBar = () => {
  let title1 = createRef();

  let title2 = createRef();

  let title3 = createRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(title1, 0.5, { scaleY: 1, ease: 'elastic.out(1, 0.3)' }).delay(1);
    tl.to(title2, 0.5, { scaleY: 1, ease: 'elastic.out(1, 0.3)' });
    tl.to(title3, 0.5, { scaleY: 1, ease: 'elastic.out(1, 0.3)' });
  });

  return (
    <StyledWrapper>
      <StyledTitle
        ref={el => {
          title1 = el;
        }}
      >
        Fast Shipping{' '}
      </StyledTitle>
      <StyledTitle
        ref={el => {
          title2 = el;
        }}
      >
        {' '}
        • Lifetime Warranty{' '}
      </StyledTitle>
      <StyledTitle
        ref={el => {
          title3 = el;
        }}
      >
        • 30-day returns
      </StyledTitle>
    </StyledWrapper>
  );
};

export default TopBar;
