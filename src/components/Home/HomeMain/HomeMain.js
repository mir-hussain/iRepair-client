import React from "react";
import AboutSection from "./AboutSection/AboutSection";
import ReviewSection from "./ReviewSection/ReviewSection";
import ServiceSection from "./ServiceSection/ServiceSection";
import TeamSection from "./TeamSection/TeamSection";

const HomeMain = () => {
  return (
    <div>
      <AboutSection />
      <ServiceSection />
      <ReviewSection />
      <TeamSection />
    </div>
  );
};

export default HomeMain;
