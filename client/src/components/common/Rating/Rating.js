import styled, { css } from 'styled-components';

import PropTypes from 'prop-types';
import React from 'react';
import Star from 'assets/star-solid.svg';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0 3px;

  ${({ alignCenter }) =>
    alignCenter &&
    css`
      justify-content: center;
    `}
`;

const StyledNumber = styled.span`
  font-weight: 300;
  font-size: 1.2rem;
  margin-right: 3px;
`;

const StyledStars = styled.span`
  align-items: center;
  padding-bottom: 3px;
`;

const StyledStar = styled.img`
  width: 10px;
  height: 10px;
  filter: invert(97%) sepia(32%) saturate(203%) hue-rotate(208deg) brightness(118%) contrast(87%);

  ${({ fillRed }) =>
    fillRed &&
    css`
      filter: invert(22%) sepia(71%) saturate(3656%) hue-rotate(351deg) brightness(90%)
        contrast(98%);
    `}
`;

const Rating = ({ rating, alignCenter }) => {
  const countRating = rating => {
    let ratingsSum = 0;
    for (let i = 0; i < rating.length; i += 1) {
      ratingsSum += rating[i][0].rating;
    }
    return Math.floor(ratingsSum / rating.length);
  };

  const renderStars = rating => {
    const starsCompilation = [];

    for (let i = 0; i < rating; i += 1) {
      starsCompilation.push(<StyledStar key={`fill${i}`} fillRed src={Star} />);
    }
    for (let i = 0; i < 5 - rating; i += 1) {
      starsCompilation.push(<StyledStar key={`nofill${i}`} src={Star} />);
    }

    return <>{starsCompilation.map(star => star)}</>;
  };

  const oneOrMultipleReviews = rating => {
    if (rating.length > 1) {
      return (
        <>
          <StyledNumber>{countRating(rating)}</StyledNumber>
          <StyledStars>{renderStars(countRating(rating))}</StyledStars>
        </>
      );
    }
    return (
      <>
        <StyledNumber>{rating}</StyledNumber>
        <StyledStars>{renderStars(rating)}</StyledStars>
      </>
    );
  };

  return <StyledWrapper alignCenter={alignCenter}>{oneOrMultipleReviews(rating)}</StyledWrapper>;
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  alignCenter: PropTypes.bool.isRequired,
};

export default Rating;
