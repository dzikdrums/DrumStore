import Button from 'components/common/Button/Button';
import Fade from 'react-reveal/Fade';
import Heading from 'components/common/Heading/Heading';
import React from 'react';
import YoutubeVideo from 'components/common/YoutubeVideo/YoutubeVideo';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  justify-content: center;
  padding: 4vw 0 60px;
`;

const YoutubeVideoWrapper = styled.div`
  width: 90%;
  height: 100%;
  margin: 20px auto 30px;
`;

const StyledButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 5vw;
`;

const YoutubeSection = () => (
  <StyledWrapper>
    <Fade bottom>
      <Heading green>our youtube channel</Heading>
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
    </Fade>
  </StyledWrapper>
);

export default YoutubeSection;
