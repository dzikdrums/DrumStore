import PropTypes from 'prop-types';
import React from 'react';
import { addComment } from 'redux/productsRedux';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const AddReviewModal = ({ id }) => {
  return (
    <StyledWrapper>
      <h1>heheszki</h1>
      <p>{id}</p>
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
