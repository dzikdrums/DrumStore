import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Button from 'components/common/Button/Button';
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';
import Picture1 from 'assets/carousel-1.jpg';
import Picture2 from 'assets/carousel-2.jpg';
import Picture3 from 'assets/carousel-3.jpg';
import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  background-color: black;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  opacity: 0;
  visibility: 0;
  transition: all 0.8s ease-in-out;
`;

const StyledImage = styled.img`
  transition: all 0.5s ease-in-out;
  filter: grayscale(100%);
`;

const StyledCarousel = styled(Carousel)`
  position: relative;

  :hover {
    ${StyledImage} {
      opacity: 0.8;
    }

    ${ButtonWrapper} {
      opacity: 1;
      visibility: 1;
    }
  }
`;

const IntroCarousel = () => (
  <StyledWrapper>
    <StyledCarousel
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      autoPlay
      selectedItem={1}
      infiniteLoop
      showThumbs={false}
      stopOnHover
      interval={3000}
    >
      <div>
        <StyledImage src={Picture1} />
        <ButtonWrapper>
          <NavLink to="/drums/tama">
            <Button smallLetters="true">check tama drumkits</Button>
          </NavLink>
        </ButtonWrapper>
      </div>
      <div>
        <StyledImage src={Picture2} />
        <ButtonWrapper>
          <NavLink to="/cymbals/meinl">
            <Button smallLetters="true">check meinl cymbals</Button>
          </NavLink>
        </ButtonWrapper>
      </div>
      <div>
        <StyledImage src={Picture3} />
        <ButtonWrapper>
          <NavLink to="/drums/dw">
            <Button smallLetters="true">check dw drumkits</Button>
          </NavLink>
        </ButtonWrapper>
      </div>
    </StyledCarousel>
  </StyledWrapper>
);

export default IntroCarousel;
