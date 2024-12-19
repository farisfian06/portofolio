import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/sections/HeroSection";
import AboutMe from "../components/sections/AboutMe";
import Experiences from "../components/sections/Experiences";
import Project from "../components/sections/Project";
import TechStack from "../components/sections/TechStack";
import { ReactLenis } from "lenis/dist/lenis-react";

const LandingPage = () => {
  return (
    <>
      <ReactLenis root>
        <Navbar />
        <HeroSection />
        <main>
          <AboutMe />
          <Experiences />
          <Project />
          <TechStack />
        </main>
        <Footer />
      </ReactLenis>
    </>
  );
};

export default LandingPage;
