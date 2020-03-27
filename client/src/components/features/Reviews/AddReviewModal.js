import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import Button from 'components/common/Button/Button';
import PropTypes from 'prop-types';
import ReviewsRating from 'components/features/Reviews/ReviewsRating';
import { addComment } from 'redux/productsRedux';
import arrowLeft from 'assets/arrowLeft.png';
import { connect } from 'react-redux';
import { media } from 'utils';

const StyledWrapper = styled.div`
  visibility: hidden;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  padding: 30px 10px;
  border-top: 48px solid #f3f3f3;
  z-index: 3;

  transition: visibility 600ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 400ms cubic-bezier(0.4, 0, 0.2, 1);

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      visibility: visible;

      ${media.tablet`
        visibility: hidden;
        opacity: 0;
      `}
    `}
`;

const StyledQuestion = styled.p`
  font-weight: 600;
  text-align: left;
  font-size: 16px;
  margin: 25px 0;
`;

const StyledInnerWrapper = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledOuterWrapper = styled.div`
  display: flex;
`;

const StyledImage = styled.img`
  height: 100px;
`;

const StyledName = styled.p`
  color: black;
  text-align: left;
  font-size: 1.2rem;
  font-weight: 600;
`;

const StyledFewWords = styled.p`
  font-weight: 600;
  text-align: left;
  font-size: 1.2rem;
  text-transform: uppercase;
  margin: 40px 0 20px;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border: 2px solid #d1d1d1;
  resize: none;

  ::placeholder {
    font-size: 1.4rem;
    padding: 5px 10px;
  }
`;

const StyledBackButton = styled.a`
  height: 20px;
  color: black;
  font-size: 1.4rem;
  position: absolute;
  top: -30px;
  left: 25px;
`;

const StyledInput = styled.input`
  border: 2px solid #d1d1d1;
  margin: 5px 0;
  padding: 5px;
  display: block;

  ::placeholder {
    font-size: 1.4rem;
    padding: 0 5px;
  }
`;

const StyledArrow = styled.img`
  width: 23px;
  height: 23px;
  position: absolute;
  top: -35px;
  left: 12px;
`;

const AddReviewModal = ({ id, img, name, active, addComment }) => {
  const [textArea, setTextArea] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [starsAmount, setStarsAmount] = useState('');

  const placeholder = 'Please share your thoughts about the product. Was it as You expected?';

  const handleChange = (place, event) => {
    if (place === 'area') {
      setTextArea(event.target.value);
    } else {
      setNameInput(event.target.value);
    }
  };

  const handleRating = stars => {
    setStarsAmount(stars);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const time = new Date().getTime();
    const date = new Date(time);

    const newComment = {
      rating: starsAmount,
      comment: textArea,
      name: nameInput,
      date: date.toISOString,
    };

    addComment(id, newComment);

    console.log(newComment);
  };

  return (
    <StyledWrapper active={active}>
      <StyledArrow src={arrowLeft} />
      <StyledQuestion>What do You think about product?</StyledQuestion>
      <StyledOuterWrapper>
        <StyledImage src={img} />
        <StyledInnerWrapper>
          <StyledName>{name}</StyledName>
          <ReviewsRating handleRating={handleRating} />
        </StyledInnerWrapper>
      </StyledOuterWrapper>
      <StyledFewWords>Say a few words about the product.</StyledFewWords>
      <form onSubmit={handleSubmit}>
        <StyledTextArea
          placeholder={placeholder}
          value={textArea}
          onChange={e => handleChange('area', e)}
        />
        <StyledInput
          placeholder="enter your name"
          value={nameInput}
          onChange={e => handleChange('name', e)}
        />
        <Button type="submit">Send</Button>
      </form>
    </StyledWrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  addComment: payload => dispatch(addComment(payload)),
});

AddReviewModal.propTypes = {
  id: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(AddReviewModal);
