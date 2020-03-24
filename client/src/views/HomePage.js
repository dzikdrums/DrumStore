import IntroSection from 'components/features/IntroSection/IntroSection';
import ParallaxImage from 'components/features/ParallaxImage/ParallaxImage';
import React from 'react';
import YoutubeSection from 'components/features/YoutubeSection/YoutubeSection';

const HomePage = () => {
  return (
    <>
      <ParallaxImage jon="true" />
      <IntroSection />
      <YoutubeSection />
    </>
  );
};

export default HomePage;
