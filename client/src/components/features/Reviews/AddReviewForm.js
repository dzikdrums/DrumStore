import * as Yup from 'yup';

import { Form, Formik } from 'formik';

import Button from 'components/common/Button/Button';
import PropTypes from 'prop-types';
import React from 'react';
import { addComment } from 'redux/productsRedux';
import { connect } from 'react-redux';
import { history as historyPropTypes } from 'history-prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const StyledWrapper = styled.div`
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
    padding: 0 5px;
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
    padding: 5px 10px;
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

const AddReviewForm = ({ id, stars, addComment, history }) => {
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
      rating: stars,
      comment: text,
      name,
      date,
    };
    addComment({ comment, id });
    history.go('/');
  };

  return (
    <StyledWrapper>
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
              {errors.name && touched.name ? <StyledError>{errors.name}</StyledError> : null}
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
              {errors.text && touched.text ? <StyledError>{errors.text}</StyledError> : null}
            </StyledInputWrapper>
            <StyledButtonLinkWrapper>
              <Button type="submit">submit review</Button>
            </StyledButtonLinkWrapper>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  addComment: (id, comment) => dispatch(addComment(id, comment)),
});

AddReviewForm.propTypes = {
  id: PropTypes.string,
  stars: PropTypes.number,
  addComment: PropTypes.func,
  history: PropTypes.shape(historyPropTypes),
};

export default connect(null, mapDispatchToProps)(withRouter(AddReviewForm));
