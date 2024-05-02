import React from "react";
import { Helmet } from "react-helmet";
import Slider from "../components/SliderSection";
import AboutSection from "../components/AboutSection";
import BrandSection from "../components/BrandSection";
import WhySection from "../components/WhySection";
import ClientSection from "../components/ClientSection";
import ContactSection from "../components/ContactSection";
import InforSection from "../components/InforSection";
import SliderSection from "../components/SliderSection";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>LuxChronos</title>
      </Helmet>
      <div className="hero_area_slider">
        <SliderSection />
      </div>
      <div className="bg">
        <AboutSection />
        <BrandSection />
        <WhySection />
      </div>
      <ClientSection />
      <ContactSection />
      <InforSection />
    </div>
  );
};

export default HomePage;
