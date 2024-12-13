import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/sections/HeroSection";
import AboutMe from "../components/sections/AboutMe";
import Experiences from "../components/sections/Experiences";
import Project from "../components/sections/Project";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <main>
        <AboutMe />
        <Experiences />
        <Project />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
