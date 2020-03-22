import styled, { css } from 'styled-components';

import PropTypes from 'prop-types';
import React from 'react';
import Star from 'assets/star-solid.svg';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0 3px;
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

const Rating = ({ rating }) => {
  console.log(rating);
  const RenderStars = rating => {
    const ratingFloored = Math.floor(rating);
    const starsCompilation = [];

    for (let i = 0; i < ratingFloored; i += 1) {
      starsCompilation.push(<StyledStar key={`fill${i}`} fillRed src={Star} />);
      console.log(i);
    }
    for (let i = 0; i < 5 - ratingFloored; i += 1) {
      starsCompilation.push(<StyledStar key={`nofill${i}`} src={Star} />);
    }

    return <>{starsCompilation.map(star => star)}</>;
  };

  return (
    <StyledWrapper>
      <StyledNumber>{rating}</StyledNumber>
      <StyledStars>{RenderStars(rating)}</StyledStars>
    </StyledWrapper>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;