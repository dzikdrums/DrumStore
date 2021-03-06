import Button from 'components/common/Button/Button';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import SingleReview from 'components/features/Reviews/SingleReview';
import { media } from 'utils';
import styled from 'styled-components';
import uniqid from 'uniqid';

const StyledWrapper = styled.div`
  width: 100%;
  margin: 20px 0 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.tablet`
    width: 60%;
    margin: 0 auto;
  `}
`;

const StyledTitle = styled.h3`
  text-transform: uppercase;
  background-color: #efeff0;
  text-align: center;
  font-weight: 300;
  font-size: 1rem;
  letter-spacing: 2px;
  padding: 15px 0;

  ${media.tablet`
    font-size: 2.4rem;
  `}
`;

const Reviews = ({ comments, img, id, name }) => {
  return (
    <StyledWrapper>
      <StyledTitle>reviews</StyledTitle>
      {comments.map(comment => (
        <SingleReview key={uniqid()} name={name} img={img} comment={comment} />
      ))}
      <Button as={NavLink} to={`addReview/${id}`}>
        Add Review
      </Button>
    </StyledWrapper>
  );
};

Reviews.propTypes = {
  comments: PropTypes.array.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Reviews;
