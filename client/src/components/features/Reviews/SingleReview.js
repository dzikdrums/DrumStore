import PropTypes from 'prop-types';
import Rating from 'components/common/Rating/Rating';
import React from 'react';
import { media } from 'utils';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 90%;
  display: flex;
  margin: 10px auto;
  text-align: left;
`;

const StyledImage = styled.img`
  height: 80px;
  ${media.tablet`
    height: 100px;
   `}
`;

const StyledInnerWrapper = styled.div`
  padding-left: 10px;
`;

const StyledName = styled.h4`
  margin: 3px 0;
  font-size: 1.2rem;

  ${media.tablet`
    font-size: 1.8rem;
  `}
`;

const StyledReview = styled.p`
  font-size: 1.2rem;
  margin: 0;

  ${media.tablet`
    font-size: 1.6rem;
  `}
`;

const StyledDate = styled.p`
  color: grey;
  font-size: 1.2rem;

  ${media.tablet`
    font-size: 1.6rem;
  `}
`;

const SingleReview = ({ img, comment }) => {
  const formatDate = date => {
    const newDate = new Date(date);
    return `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`;
  };
  return (
    <StyledWrapper>
      <StyledImage src={img} />
      <StyledInnerWrapper>
        <StyledName>{comment[0].name}</StyledName>
        <Rating rating={comment[0].rating} />
        <StyledReview>{comment[0].comment}</StyledReview>
        <StyledDate>{`Review added: ${formatDate(comment[0].date)}`}</StyledDate>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

SingleReview.propTypes = {
  img: PropTypes.string.isRequired,
  comment: PropTypes.array.isRequired,
};

export default SingleReview;
