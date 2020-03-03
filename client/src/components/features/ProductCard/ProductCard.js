import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { media } from 'utils';

const StyledWrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  width: 49%;
  margin: 0.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  ${media.tablet`
    width: 32%;
  `};

  ${media.desktop`
    width: 24%;
  `};
`;

const StyledImage = styled.img`
  width: 60%;
  padding-top: 30px;
  margin: 6px auto;
`;

const StyledTitle = styled.h4`
  text-transform: uppercase;
  text-align: center;
  min-height: 30px;
  font-size: 1.4rem;
  padding: 0 5px;
`;

const StyledDescription = styled.p`
  font-size: 8px;
  font-weight: 300;
  text-align: center;
  font-size: 1rem;
  padding: 0 10px;
`;

const StyledPrice = styled.h5`
  font-weight: 300;
  color: #e2231a;
  text-transform: uppercase;
  text-align: center;
`;

const setRedirect = id => {
  console.log('dupa');
  return <Redirect to={`/product/${id}`} />;
};

const ProductCard = ({ id, img, name, price }) => {
  return (
    <StyledWrapper id={id} onClick={id => setRedirect(id)}>
      <StyledImage src={img} />
      <StyledTitle>{name}</StyledTitle>
      <StyledDescription>
        I`&apos`m using a flex box to display 8 items that will dynamically
      </StyledDescription>
      <StyledPrice>from ${price}</StyledPrice>
    </StyledWrapper>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

export default ProductCard;
