import React from 'react';
import Navbar from '../components/common/Navbar';
import HeroSection from '../components/common/HeroSection';
import IntroducingLearn from '../components/learn/IntroducingLearn';
import FeaturesLearn from '../components/learn/FeaturesLearn';
import BenefitsLearn from '../components/learn/BenefitsLearn';
import RoadmapLearn from '../components/learn/RoadmapLearn';
import JoinCommunity from '../components/common/JoinCommunity';
import Footer from '../components/common/Footer';

const Learn = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <IntroducingLearn />
      <FeaturesLearn />
      <BenefitsLearn />
      <RoadmapLearn />
      <JoinCommunity />
      <Footer />
    </>
  );
};

export default Learn;
