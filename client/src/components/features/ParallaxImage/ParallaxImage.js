import styled from 'styled-components';
import { media } from 'utils';
import jontheodore from 'assets/jontheodore.jpg';

const ParallaxImage = styled.div`
  background-image: url(${jontheodore});
  height: 400px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(100%) brightness(40%);

  ${media.tablet`
      height: 450px;
    `}

  ${media.desktop`
    height: 500px;
  `}
`;

export default ParallaxImage;
