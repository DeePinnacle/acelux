"use client";
import Herosection from "@/components/sections/Herosection";
import SplashScreen from "@/components/screens/splashscreen";
import React from "react";
import { useState } from "react";
import AboutSection from "@/components/sections/About";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturedSection from "@/components/sections/FeaturedSection";
import ChooseUs from "@/components/sections/ChooseUs";
import CTA from "@/components/sections/CTA";
import { InfiniteMovingCardsGallery } from "@/components/sections/Gallary"
import Testimonial from "@/components/sections/Testimonial";
import Footer from "@/components/Footer";

const AceLux = () => {
  const [count, setCount] = useState(0);

  const handleCountTimer = () => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    if (count === 14) {
      clearInterval(timer);
    }
  };

  handleCountTimer();
  return (
    <>
      {count <= 13 ? (
        <SplashScreen />
      ) : (
        <>
          <Navbar />
          <Herosection />
          <AboutSection />
          <ServicesSection />
          <FeaturedSection />{" "}
          <ChooseUs />
          <InfiniteMovingCardsGallery />
          <CTA />
          <Testimonial />
          <Footer /> 
        </>
      )}
    </>
  );
};

export default AceLux;
