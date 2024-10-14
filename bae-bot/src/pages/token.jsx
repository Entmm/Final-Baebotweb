import React from 'react';
import Navbar from '../components/common/Navbar';
import GettingStarted from '../components/token/GettingStarted';
import BaeBotGuide from '../components/token/BaeBotGuide';
import FindBaeBotOnTelegram from '../components/token/FindBaeBotOnTelegram';
import EnterBaeBot from '../components/token/EnterBaeBot';
import SelectServer from '../components/token/SelectServer';
import PaymentOptions from '../components/token/PaymentOptions';
import JoinCommunity from '../components/common/JoinCommunity';
import Footer from '../components/common/Footer';

const Token = () => {
  return (
    <>
      <Navbar />
      <GettingStarted />
      <BaeBotGuide />
      <FindBaeBotOnTelegram />
      <EnterBaeBot />
      <SelectServer />
      <PaymentOptions />
      <JoinCommunity />
      <Footer />
    </>
  );
};

export default Token;
