import HeroSection from "@/Components/UI/Home/HeroSection/HeroSection";
import Specialist from "@/Components/UI/Home/Specialist/Specialist";
import TopRatedDoctors from "@/Components/UI/Home/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/Components/UI/Home/WhyUs/WhyUs";


import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
      <WhyUs />
    </>
  );
};

export default HomePage;
