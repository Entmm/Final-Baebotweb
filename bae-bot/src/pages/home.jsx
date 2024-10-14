import React from 'react';
import Navbar from '../components/common/Navbar';
import HeroSection from '../components/common/HeroSection';
import Introducing from '../components/home/Introducing';
import Features from '../components/home/Features';
import Benefits from '../components/home/Benefits';
import Roadmap from '../components/home/Roadmap';
import JoinCommunity from '../components/common/JoinCommunity';
import Footer from '../components/common/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Introducing />
      <Features />
      <Benefits />
      <Roadmap />
      <JoinCommunity />
      <Footer />
    </>
  );
};

export default Home;
