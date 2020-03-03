import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { history as historyPropTypes } from 'history-prop-types';
import { media } from 'utils';
import Price from 'components/common/Price/Price';
import CartButton from 'components/common/CartButton/CartButton';

const StyledWrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  width: 49%;
  margin: 0.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  margin: 0px auto;
`;

const StyledImageWrapper = styled.div`
  height: 40%;
  display: flex;
  justify-content: center;
`;

const StyledTitle = styled.h4`
  text-transform: uppercase;
  text-align: center;
  min-height: 30px;
  font-size: 1.4rem;
  padding: 5px 5px 0;
`;

const StyledDescription = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
  text-align: center;
  font-size: 1rem;
  padding: 0 10px;

  ${media.tablet`
    font-size: 1.2rem;
  `};

  ${media.desktop`
    font-size: 1.4rem;
  `};
`;

const StyledInnerWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const setRedirect = (id, history) => {
  history.push(`/product/${id}`);
};

const ProductCard = ({ id, img, name, desc, price, history }) => {
  return (
    <StyledWrapper onClick={() => setRedirect(id, history)}>
      <StyledImageWrapper>
        <StyledImage src={img} />
      </StyledImageWrapper>
      <StyledInnerWrapper>
        <StyledTitle>{name}</StyledTitle>
        <StyledDescription>{desc}</StyledDescription>
        <CartButton card="true">add to cart</CartButton>
        <Price>${price}</Price>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  history: PropTypes.shape(historyPropTypes),
};

export default withRouter(ProductCard);
