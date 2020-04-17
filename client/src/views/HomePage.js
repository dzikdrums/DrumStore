import Carousel from 'components/features/Carousel/Carousel';
import HowItWorks from 'components/features/HowItWorks/HowItWorks';
import IntroSection from 'components/features/IntroSection/IntroSection';
import React from 'react';
import YoutubeSection from 'components/features/YoutubeSection/YoutubeSection';

const HomePage = () => (
  <>
    <Carousel />
    <IntroSection />
    <HowItWorks />
    <YoutubeSection />
  </>
);

export default HomePage;
