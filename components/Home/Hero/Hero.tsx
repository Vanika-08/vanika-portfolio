"use client";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import ParticleBackground from "./ParticleBackground";

const scrollToProjects = () => {
  const el = document.getElementById("projects");

  if (el) {
    const offset = 80;
    const targetY = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: targetY, behavior: "smooth" });
    history.pushState(null, "", "#projects");
  }
};

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <ParticleBackground />
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/images/vanika_photograph.jpeg"
          alt="heroimage"
          width={160}
          height={160}
          className="rounded-full border-4 border-[#0c0c48aa] h-[160px] w-[160px]"
          data-aos="fade-up"
        />

        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide"
        >
         Building scalable web experiences with
          <span className="text-cyan-200"> performance and precision.</span>
        </h1>

        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center justify-center"
        >
          Hi! I&apos;m Vanika - A Passionate
          <span className="text-cyan-200 font-bold">
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "Web Developer",
                  "Full Stack Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>
        <button
          onClick={scrollToProjects}
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium flex items-center justify-center"
        >
          <span>See my work</span>
          <BsArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
};
export default Hero;
