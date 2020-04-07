import maciejdzik from 'assets/maciejdzik.JPG';
import { media } from 'utils';
import styled from 'styled-components';

const ParallaxImage = styled.div`
  background-image: url(${maciejdzik});
  height: 200px;
  background-attachment: scroll;
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100%;
  backface-visibility: hidden;
  position: static;

  ${media.tablet`
      background-attachment: fixed;
      height: 450px;
    `}

  ${media.desktop`
    background-attachment: fixed;
    height: 500px;
  `}
`;

export default ParallaxImage;
