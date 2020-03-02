import React from 'react';
import styled from 'styled-components';
import Heading from 'components/common/Heading/Heading';
import YoutubeVideo from 'components/common/YoutubeVideo/YoutubeVideo';
import Button from 'components/common/ButtonLink/ButtonLink';

const StyledWrapper = styled.div`
  justify-content: center;
  padding: 4vw 0;
`;

const YoutubeVideoWrapper = styled.div`
  width: 70%;
  height: 100%;
  margin: 30px auto;
`;

const StyledButtonLinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const YoutubeSection = () => (
  <StyledWrapper>
    <Heading small>our youtube channel</Heading>
    <YoutubeVideoWrapper>
      <YoutubeVideo youtubeId="sV6yoDOXYSg" />
    </YoutubeVideoWrapper>
    <StyledButtonLinkWrapper>
      <Button
        as="a"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.youtube.com/channel/UCjRHUphHndh-jU1kUgh_nJQ?sub_confirmation=1"
      >
        subscribe
      </Button>
    </StyledButtonLinkWrapper>
  </StyledWrapper>
);

export default YoutubeSection;
