import React, { useState } from 'react';

import AddReviewModal from 'components/features/Reviews/AddReviewModal';
import Button from 'components/common/Button/Button';
import PropTypes from 'prop-types';
import SingleReview from 'components/features/Reviews/SingleReview';
import { media } from 'utils';
import styled from 'styled-components';

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
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <StyledWrapper>
      <StyledTitle>reviews</StyledTitle>
      {comments.map(comment => (
        <SingleReview key={name} name={name} img={img} comment={comment} />
      ))}
      <Button onClick={() => toggleModal()}>Add Review</Button>
      {modal && <AddReviewModal name={name} modal={modal} setModal={setModal} img={img} id={id} />}
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
