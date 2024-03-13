
import React from 'react';
import Navbar from './Navbar';
import HugeText from './HugeText';
import Card from './Card';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HugeText />
      <div className="container">
        <Card title="Card 1" text="first card." />
        <Card title="Card 2" text="second card." />
      </div>
    </div>
  );
};

export default LandingPage;
