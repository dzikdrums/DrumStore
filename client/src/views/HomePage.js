import React from 'react';
import IntroSection from 'components/features/IntroSection/IntroSection';
import ParallaxImage from 'components/features/ParallaxImage/ParallaxImage';
import YoutubeSection from 'components/features/YoutubeSection/YoutubeSection';

const HomePage = () => (
  <>
    <ParallaxImage />
    <IntroSection />
    <YoutubeSection />
  </>
);

export default HomePage;
