import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import PropTypes from 'prop-types';
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

const StyledStars = styled.span`
  align-items: center;
  padding-bottom: 3px;
`;

const StyledStar = styled.img`
  width: 25px;
  height: 25px;
  margin: 2px;
  filter: invert(97%) sepia(32%) saturate(203%) hue-rotate(208deg) brightness(118%) contrast(87%);
  transition: transform 1s ease-in-out, filter 0;

  :hover {
    transform: scale(1.4);
    filter: invert(22%) sepia(71%) saturate(3656%) hue-rotate(351deg) brightness(90%) contrast(98%);
  }

  ${({ fillRed }) =>
    fillRed &&
    css`
      filter: invert(22%) sepia(71%) saturate(3656%) hue-rotate(351deg) brightness(90%)
        contrast(98%);
    `}
`;

const ReviewsRating = ({ handleRating }) => {
  const [givenStars, setGivenStars] = useState(0);

  const handleGiveStars = amount => {
    setGivenStars(amount);
  };

  const renderStars = rating => {
    const starsCompilation = [];

    if (rating > 0) rating += 1;

    for (let i = 0; i < rating; i += 1) {
      starsCompilation.push(
        <StyledStar key={i} onClick={() => handleGiveStars(i)} fillRed src={Star} />,
      );
    }
    for (let i = rating; i < 5; i += 1) {
      starsCompilation.push(<StyledStar onClick={() => handleGiveStars(i)} key={i} src={Star} />);
    }

    return <>{starsCompilation.map(star => star)}</>;
  };

  useEffect(() => {
    renderStars();
  }, [givenStars]);

  handleRating(givenStars);

  return (
    <StyledWrapper alignCenter="true">
      <StyledStars>
        <StyledStars>{renderStars(givenStars)}</StyledStars>
      </StyledStars>
    </StyledWrapper>
  );
};

ReviewsRating.propTypes = {
  handleRating: PropTypes.func.isRequired,
};

export default ReviewsRating;
