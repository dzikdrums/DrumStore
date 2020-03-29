import React, { useState } from 'react';

import AddReviewForm from 'components/features/Reviews/AddReviewForm';
import Modal from 'styled-react-modal';
import PropTypes from 'prop-types';
import ReviewsRating from 'components/features/Reviews/ReviewsRating';
import arrowLeft from 'assets/arrowLeft.png';
import { history as historyPropTypes } from 'history-prop-types';
import { media } from 'utils';
import styled from 'styled-components';

const StyledModal = Modal.styled`
  z-index: 9999;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  transition: 600ms cubic-bezier(0.4, 0, 0.2, 1),
`;

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 30px 10px;
  border-top: 48px solid #f3f3f3;

  ${media.tablet`
    width: 60%;
    height: 75%;
    left: auto;
    top: auto;
  `}

  ${media.desktop`
    width: 40%;
    height: 75%;
    left: auto;
    top: auto;
  `}
`;

const StyledQuestion = styled.p`
  font-weight: 600;
  font-size: 16px;
  margin: 25px 0;

  ${media.tablet`
    margin: 0 0 15px;
  `}
`;

const StyledInnerWrapper = styled.div`
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

const StyledArrow = styled.img`
  width: 23px;
  height: 23px;
  position: absolute;
  top: -35px;
  left: 12px;
  z-index: 9999;
`;

const AddReviewModal = ({ id, img, name, setModal, modal, history }) => {
  const [starsAmount, setStarsAmount] = useState('');

  const handleRating = stars => {
    setStarsAmount(stars);
  };

  function toggleModal() {
    setModal(!modal);
  }

  return (
    <StyledModal isOpen={modal} onBackgroundClick={toggleModal} onEscapeKeydown={toggleModal}>
      <StyledWrapper>
        <StyledArrow src={arrowLeft} onClick={toggleModal} />
        <StyledQuestion>What do You think about product?</StyledQuestion>
        <StyledOuterWrapper>
          <StyledImage src={img} />
          <StyledInnerWrapper>
            <StyledName>{name}</StyledName>
            <ReviewsRating handleRating={handleRating} />
          </StyledInnerWrapper>
        </StyledOuterWrapper>
        <StyledFewWords>Say a few words about the product.</StyledFewWords>
        <AddReviewForm id={id} stars={starsAmount} />
      </StyledWrapper>
    </StyledModal>
  );
};

AddReviewModal.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  addComment: PropTypes.func,
  setModal: PropTypes.func,
  modal: PropTypes.bool,
  history: PropTypes.shape(historyPropTypes),
};

export default AddReviewModal;
