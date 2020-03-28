import Fade from 'react-reveal/Fade';
import Price from 'components/common/Price/Price';
import PriceOption from 'utils/PriceOption';
import PropTypes from 'prop-types';
import Rating from 'components/common/Rating/Rating';
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
  position: relative;
  border: 1px #eff0f0 solid;

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
  font-size: 1.3rem;
  padding: 5px 5px 0;
  height: 43px;
  margin: 10px 0 0;
  line-height: 20px;
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
  justify-content: center;
`;

const StyledDescriptionWrapper = styled.div`
  height: 100px;

  ${media.desktop`
    height: 170px;
  `};
`;

const StyledNewSpan = styled.span`
  color: white;
  background-color: #e2231a;
  text-transform: uppercase;
  position: absolute;
  border-radius: 20px;
  font-size: 1.2rem;
  top: 5px;
  right: 10px;
  padding: 0 8px;
  z-index: 2;
  line-height: 20px;
  letter-spacing: 1px;
  font-weight: 300;

  ${media.tablet`
  top: 10px;
  right: 20px;
  `}
`;

const setRedirect = (id, history) => {
  history.push(`/product/${id}`);
};

const ProductCard = ({ id, img, name, desc, price, history, comments }) => {
  return (
    <StyledWrapper onClick={() => setRedirect(id, history)}>
      <StyledNewSpan>new</StyledNewSpan>
      <Fade>
        <StyledImage src={img} />
        <StyledInnerWrapper>
          <StyledTitle>{name}</StyledTitle>
          <StyledDescriptionWrapper>
            <StyledDescription>{desc}</StyledDescription>
          </StyledDescriptionWrapper>
          <Rating rating={comments} />
          <Price>
            <PriceOption price={price} />
          </Price>
        </StyledInnerWrapper>
      </Fade>
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
  comments: PropTypes.array,
};

export default withRouter(ProductCard);
