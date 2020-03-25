import React, { useState } from 'react';

import AddReviewModal from 'components/features/Reviews/AddReviewModal';
import Button from 'components/common/Button/Button';
import SingleReview from 'components/features/Reviews/SingleReview';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  width: 100%;
  margin: 20px 0 60px;
  text-align: center;
`;

const StyledTitle = styled.h3`
  text-transform: uppercase;
  background-color: #efeff0;
  text-align: center;
  font-weight: 300;
  font-size: 20px;
  letter-spacing: 2px;
  padding: 15px 0;
`;

const Reviews = ({ comments, img, id }) => {
  const [isVisible, setVisible] = useState(false);

  const addComment = () => {
    setVisible(!isVisible);
  };
  return (
    <StyledWrapper>
      <StyledTitle>reviews</StyledTitle>
      {comments.map(comment => (
        <SingleReview img={img} comment={comment} />
      ))}
      <Button onClick={() => addComment()}>Add Review</Button>
      {isVisible && <AddReviewModal id={id} />}
    </StyledWrapper>
  );
};

Reviews.propTypes = {
  comments: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
/}

export default Reviews;
