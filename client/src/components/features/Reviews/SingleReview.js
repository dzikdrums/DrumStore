import PropTypes from 'prop-types';
import Rating from 'components/common/Rating/Rating';
import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 10px 0;
  text-align: left;
`;

const StyledImage = styled.img`
  height: 80px;
`;

const StyledInnerWrapper = styled.div`
  padding-left: 10px;
`;

const StyledName = styled.h4`
  color: black;
  margin: 3px 0;
  font-size: 12px;
`;

const StyledReview = styled.p`
  color: black;
  font-size: 12px;
  margin: 0;
`;

const StyledDate = styled.p`
  color: grey;
  font-size: 12px;
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

SingleReview.PropTypes = {
  img: PropTypes.string.isRequired,
  comment: PropTypes.array.isRequired,
};

export default SingleReview;
