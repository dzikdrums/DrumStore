import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// eslint-disable-next-line
const ScrollToTop = props => {
  useEffect(
    props => {
      window.scrollTo(0, 0);
    },
    [props.location],
  );

  return props.children;
};

export default withRouter(ScrollToTop);
