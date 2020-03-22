import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import PropTypes from 'prop-types';
import { media } from 'utils';

const StyledWrapper = styled.div`
  background-color: #efeff0;
  height: 40px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 850px;
  transition: transform 0.3s;

  ${media.desktop`
    max-width: 900px;
  `}

  ${({ hidden }) =>
    hidden &&
    css`
      transform: translateY(-50px);
    `}
`;

const StyledTitle = styled.span`
  color: #e2231a;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 300;
  white-space: nowrap;
  margin: 0 4px;

  ${media.tablet`
    font-size: 1.8rem;
    letter-spacing: 2.5px;
  `}
`;

export default class TopBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const visible = window.pageYOffset === 0;
    this.setState({
      visible,
    });
  };

  render() {
    const { setVisible } = this.props;
    const { visible } = this.state;
    setVisible(visible);

    return (
      <StyledWrapper hidden={!visible}>
        <StyledTitle>Fast Shipping </StyledTitle>
        <StyledTitle> • Lifetime Warranty </StyledTitle>
        <StyledTitle>• 30-day returns</StyledTitle>
      </StyledWrapper>
    );
  }
}

TopBar.propTypes = {
  setVisible: PropTypes.func.isRequired,
};
