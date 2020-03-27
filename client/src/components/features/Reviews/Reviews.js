import React, { useState } from 'react';

import AddReviewModal from 'components/features/Reviews/AddReviewModal';
import PropTypes from 'prop-types';
import SingleReview from 'components/features/Reviews/SingleReview';
import { media } from 'utils';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  margin: 20px 0 60px;

  ${media.tablet`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  const [isVisible, setVisible] = useState(false);

  const addComment = () => {
    setVisible(!isVisible);
  };
  return (
    <StyledWrapper>
      <StyledTitle>reviews</StyledTitle>
      {comments.map((comment, index) => (
        <SingleReview key={index} name={name} img={img} comment={comment} />
      ))}
      {/* <Button onClick={() => addComment()}>Add Review</Button> */}
      <AddReviewModal name={name} img={img} active={isVisible} id={id} />
    </StyledWrapper>
  );
};

Reviews.propTypes = {
  comments: PropTypes.array.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Reviews;
