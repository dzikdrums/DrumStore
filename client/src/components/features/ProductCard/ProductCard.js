import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from 'utils';

const StyledWrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  width: 49%;
  margin: 0.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.tablet`
    width: 32%
  `};

  ${media.desktop`
    width: 24%
  `};
`;

const StyledImage = styled.img`
  width: 60%;
  margin: 2px auto;
`;

const StyledTitle = styled.h4`
  text-transform: uppercase;
  text-align: center;
  min-height: 30px;
`;

const StyledDescription = styled.p`
  font-size: 8px;
  font-weight: 300;
  text-align: center;
`;

const StyledPrice = styled.h5`
  font-weight: 300;
  color: #e2231a;
  text-transform: uppercase;
  text-align: center;
`;

const ProductCard = ({ id, tag, img, name, price }) => {
  console.log(img);
  return (
    <StyledWrapper>
      <StyledImage src={img.src} />
      <StyledTitle>{name}</StyledTitle>
      <StyledDescription>
        I'm using a flex box to display 8 items that will dynamically
      </StyledDescription>
      <StyledPrice>from ${price}</StyledPrice>
    </StyledWrapper>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string,
  tag: PropTypes.string,
  img: PropTypes.shape({
    src: PropTypes.string,
  }),
  name: PropTypes.string,
  price: PropTypes.number,
};

export default ProductCard;
