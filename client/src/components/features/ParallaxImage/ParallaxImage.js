import styled, { css } from 'styled-components';
import { media } from 'utils';
import jontheodore from 'assets/jontheodore.jpg';
import maciejdzik from 'assets/maciejdzik.JPG';

const ParallaxImage = styled.div`
  background-image: url(${maciejdzik});
  height:200px;
  background-attachment: scroll;
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100%;
  backface-visibility: hidden;
  position: static;

  ${({ jon }) =>
    jon &&
    css`
      background-image: url(${jontheodore});
      filter: grayscale(100%) brightness(40%);
    `}

  ${media.phone`
  background-attachment: fixed;
  height:200px;
  `}
    
  ${media.tablet`
      height: 450px;
    `}

  ${media.desktop`
    height: 500px;
  `}
`;

export default ParallaxImage;
