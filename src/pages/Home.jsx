import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import FeauteredMenu from "../components/FeauteredMenu";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Map from "../components/Map";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <FeauteredMenu />
      <Testimonials />
      <Map />
      <CTA />
    </div>
  );
};

export default Home;
