import * as Yup from 'yup';

import { Form, Formik } from 'formik';
import { NavLink, Redirect, withRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {
  addComment,
  getRequest,
  getSingleProduct,
  loadSingleProductRequest,
} from 'redux/productsRedux';

import Button from 'components/common/Button/Button';
import Modal from 'styled-react-modal';
import PropTypes from 'prop-types';
import ReviewsRating from 'components/features/Reviews/ReviewsRating';
import Spinner from 'components/common/Spinner/Spinner';
import arrowLeft from 'assets/arrowLeft.png';
import { connect } from 'react-redux';
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
`;

const StyledThankYouModal = styled(StyledModal)`
  height: 60vh;
  max-width: 600px;
  padding: 20px;
`;

const StyledThankYou = styled.h2`
  font-size: 3rem;
  margin: 0;
  text-align: center;
`;

const CommentAdded = styled.p`
  font-size: 1.8rem;
`;

const StyledSpinnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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

const StyledFormikWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  border: 2px solid #d1d1d1;
  margin: 5px 0;
  padding: 5px;
  display: block;

  ::placeholder {
    font-size: 1.4rem;
    padding: 0;
  }
`;

const StyledTextArea = styled(StyledInput)`
  width: 100%;
  max-width: 400px;
  height: 100px;
  border: 2px solid #d1d1d1;
  resize: none;

  ::placeholder {
    font-size: 1.4rem;
    padding: 5px 0px;
  }
`;

const StyledButtonLinkWrapper = styled.div`
  width: 100%;
  padding-top: 2vw;
`;

const StyledError = styled.span`
  font-size: 1.4rem;
  font-weight: 300;
  color: red;
  margin: 0;
  padding: 0;
  position: relative;
`;

const StyledInputWrapper = styled.div`
  width: 100%;
`;

const AddReviewModal = ({ match, addComment, request, product, loadSingleProductRequest }) => {
  const [starsAmount, setStarsAmount] = useState('');
  const [commentSent, setCommentSent] = useState(false);
  const [thankForOrder, setThankForOrder] = useState(false);
  const { id } = match.params;

  useEffect(() => {
    loadSingleProductRequest(id);
  }, []);

  const ReviewSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(80, 'Too Long!')
      .required('Required'),
    text: Yup.string()
      .min(2, 'Too Short!')
      .max(1000, 'Too Long, only 1000 characters are allowed!')
      .required('Required'),
  });

  const handleSubmit = ({ name, text }) => {
    const time = new Date().getTime();
    const date = new Date(time).toISOString();
    const comment = {
      rating: starsAmount,
      comment: text,
      name,
      date,
    };
    addComment({ comment, id });
    setThankForOrder(!thankForOrder);
    setTimeout(function() {
      setCommentSent(!commentSent);
    }, 3000);
  };

  const handleRating = stars => {
    setStarsAmount(stars);
  };

  if (request.pending === false && request.success === true && product.length > 0)
    return (
      <>
        <StyledThankYouModal isOpen={thankForOrder}>
          <StyledThankYou>Thank You for Your opinion!</StyledThankYou>
          <CommentAdded>Your review has been added!</CommentAdded>
          {commentSent && <Redirect to="/" />}
        </StyledThankYouModal>
        <StyledModal isOpen={!thankForOrder}>
          <StyledWrapper>
            <NavLink to={`/product/${match.params.id}`}>
              <StyledArrow src={arrowLeft} />
            </NavLink>
            <StyledQuestion>What do You think about product?</StyledQuestion>
            <StyledOuterWrapper>
              <StyledImage src={product[0].img} />
              <StyledInnerWrapper>
                <StyledName>{product[0].name}</StyledName>
                <ReviewsRating handleRating={handleRating} />
              </StyledInnerWrapper>
            </StyledOuterWrapper>
            <StyledFewWords>Say a few words about the product.</StyledFewWords>
            <StyledFormikWrapper>
              <Formik
                initialValues={{ name: '', text: '' }}
                onSubmit={(values, { resetForm }) => {
                  handleSubmit(values);
                  resetForm();
                }}
                validationSchema={ReviewSchema}
              >
                {({ errors, touched, values, handleChange, handleBlur }) => (
                  <StyledForm>
                    <StyledInputWrapper>
                      <StyledInput
                        placeholder="enter your name"
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      {errors.name && touched.name ? (
                        <StyledError>{errors.name}</StyledError>
                      ) : null}
                    </StyledInputWrapper>
                    <StyledInputWrapper textarea="true">
                      <StyledTextArea
                        placeholder="Please share your thoughts about the product. Was it as You expected?"
                        name="text"
                        as="textarea"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.text}
                      />
                      {errors.text && touched.text ? (
                        <StyledError>{errors.text}</StyledError>
                      ) : null}
                    </StyledInputWrapper>
                    <StyledButtonLinkWrapper>
                      <Button type="submit">submit review</Button>
                    </StyledButtonLinkWrapper>
                  </StyledForm>
                )}
              </Formik>
            </StyledFormikWrapper>
          </StyledWrapper>
        </StyledModal>
      </>
    );
  return (
    <StyledSpinnerWrapper>
      <Spinner />
    </StyledSpinnerWrapper>
  );
};

const mapStateToProps = state => ({
  product: getSingleProduct(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  addComment: (id, comment) => dispatch(addComment(id, comment)),
  loadSingleProductRequest: id => dispatch(loadSingleProductRequest(id)),
});

AddReviewModal.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  addComment: PropTypes.func,
  product: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      tag: PropTypes.string,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      desc: PropTypes.string,
      rating: PropTypes.number,
      comments: PropTypes.array,
    }),
  ),
  loadSingleProductRequest: PropTypes.func,
  request: PropTypes.shape({
    pending: PropTypes.bool.isRequired,
    error: PropTypes.bool,
    success: PropTypes.bool,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddReviewModal));
