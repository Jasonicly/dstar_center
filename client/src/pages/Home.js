import React from 'react';
import DevelopingFutureStars from '../components/DevelopingFutureStars';
import WhatMakesUsSpecial from '../components/WhatMakesUsSpecial';
import HeroSection from '../components/HeroSection';
import MainObjective from '../components/MainObjective';
import CenterLocation from '../components/CenterLocation';
import Registration from '../components/Registration';
import WhatsAppButton from '../components/WhatsAppButton'; // Import the WhatsApp button component

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Objective Section */}
      <MainObjective />

      {/* Developing Stars Section */}
      <DevelopingFutureStars />

      {/* What Makes Us Special Section */}
      <WhatMakesUsSpecial />

      {/* Center Location Section */}
      <CenterLocation />

      {/* Registration Section */}
      <Registration />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}

export default Home;
