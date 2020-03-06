import Button from 'components/common/Button/Button';
import Heading from 'components/common/Heading/Heading';
import React from 'react';
import YoutubeVideo from 'components/common/YoutubeVideo/YoutubeVideo';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  justify-content: center;
  padding: 4vw 0 25vw;
`;

const YoutubeVideoWrapper = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto 30px;
`;

const StyledButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 5vw;
`;

const YoutubeSection = () => (
  <StyledWrapper>
    <Heading small>our youtube channel</Heading>
    <YoutubeVideoWrapper>
      <YoutubeVideo youtubeId="sV6yoDOXYSg" />
    </YoutubeVideoWrapper>
    <StyledButtonWrapper>
      <Button
        as="a"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.youtube.com/channel/UCjRHUphHndh-jU1kUgh_nJQ?sub_confirmation=1"
      >
        subscribe
      </Button>
    </StyledButtonWrapper>
  </StyledWrapper>
);

export default YoutubeSection;
