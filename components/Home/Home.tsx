"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Project from "./Projects/Project";
import Skills from "./Skills/skills";
import Contact from "./Conatct/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {

 useEffect(() => {
  const initAOS = async () => {
    await import("aos");

    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  };

  initAOS();
}, []);

  return <div id="home" className="overflow-hidden">
    <Hero/>
    <Services/>
    <Resume/>
    <Project/>
    <Skills/>
    <Contact/>
  </div>;
};

export default Home;
