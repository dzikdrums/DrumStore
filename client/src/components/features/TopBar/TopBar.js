import React, { Component, createRef } from 'react';
import styled, { css } from 'styled-components';

import PropTypes from 'prop-types';
import { gsap } from 'gsap';
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
  transform: scaleY(0);
  transform-origin: bottom;

  ${media.tablet`
    font-size: 1.8rem;
    letter-spacing: 2.5px;
  `}
`;

export default class TopBar extends Component {
  title1 = createRef();

  title2 = createRef();

  title3 = createRef();

  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const tl = gsap.timeline();

    tl.to(this.title1, 0.5, { scaleY: 1, ease: 'elastic.out(1, 0.3)' }).delay(1);
    tl.to(this.title2, 0.5, { scaleY: 1, ease: 'elastic.out(1, 0.3)' });
    tl.to(this.title3, 0.5, { scaleY: 1, ease: 'elastic.out(1, 0.3)' });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

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
      <StyledWrapper
        ref={el => {
          this.bar = el;
        }}
        hidden={!visible}
      >
        <StyledTitle
          ref={el => {
            this.title1 = el;
          }}
        >
          Fast Shipping{' '}
        </StyledTitle>
        <StyledTitle
          ref={el => {
            this.title2 = el;
          }}
        >
          {' '}
          • Lifetime Warranty{' '}
        </StyledTitle>
        <StyledTitle
          ref={el => {
            this.title3 = el;
          }}
        >
          • 30-day returns
        </StyledTitle>
      </StyledWrapper>
    );
  }
}

TopBar.propTypes = {
  setVisible: PropTypes.func.isRequired,
};
