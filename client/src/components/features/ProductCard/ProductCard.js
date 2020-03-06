import Price from 'components/common/Price/Price';
import PropTypes from 'prop-types';
import React from 'react';
import { history as historyPropTypes } from 'history-prop-types';
import { media } from 'utils';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const StyledWrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  width: 49%;
  margin: 0.5%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: 0.1s ease-in-out;
  padding: 0 3px;

  :hover {
    transform: scale(1.01);
  }

  ${media.tablet`
    width: 32%;
  `};

  ${media.desktop`
    width: 24%;
  `};
`;

const StyledImage = styled.img`
  padding-top: 20px;
  width: 100%;
  object-fit: contain;
`;

const StyledTitle = styled.h4`
  text-transform: uppercase;
  text-align: center;
  font-size: 1.4rem;
  padding: 5px 5px 0;
  height: 43px;
  margin: 10px 0 0;
`;

const StyledDescription = styled.p`
  font-weight: 300;
  text-align: center;
  font-size: 1rem;
  padding: 0 10px;
  margin: 0 0 10px;
  height: 100px;

  ${media.tablet`
    font-size: 1.2rem;
  `};

  ${media.desktop`
    font-size: 1.4rem;
  `};
`;

const StyledInnerWrapper = styled.div`
  width: 100%;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const StyledDescriptionWrapper = styled.div`
  height: 100px;

  ${media.desktop`
    height: 170px;
  `};
`;

const setRedirect = (id, history) => {
  history.push(`/product/${id}`);
};

const ProductCard = ({ id, img, name, desc, price, history }) => {
  return (
    <StyledWrapper onClick={() => setRedirect(id, history)}>
      <StyledImage src={img} />
      <StyledInnerWrapper>
        <StyledTitle>{name}</StyledTitle>
        <StyledDescriptionWrapper>
          <StyledDescription>{desc}</StyledDescription>
        </StyledDescriptionWrapper>
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
  desc: PropTypes.string,
  history: PropTypes.shape(historyPropTypes),
};

export default withRouter(ProductCard);
