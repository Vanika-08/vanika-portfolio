"use client";
import Image from "next/image";
import React from "react";

const Project = () => {
  return (
    <div id="projects" className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />
        <span className="text-cyan-300">projects</span>
      </h1>

      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="0">
          <Image
            src="/images/revfin.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <a href="https://revfin.in/" target="_blank">
            <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white hover:text-cyan-300">
              Revfin Website
            </h1>
          </a>

          <h1 className="pt-2 font-medium text-white/80">
            Corporate Website • Next.js • Tailwind
          </h1>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <Image
            src="/images/emfai.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <a href="https://dev.emfai.revloans.com/" target="_blank">
            <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white hover:text-cyan-300">
              EMFAI Website
            </h1>
          </a>

          <h1 className="pt-2 font-medium text-white/80">
            Lending Platform • React • UI/UX
          </h1>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <Image
            src="/images/portfolio.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <a href="https://sameeraggarwal.com/" target="_blank">
            <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white hover:text-cyan-300">
              Portfolio of CEO
            </h1>
          </a>

          <h1 className="pt-2 font-medium text-white/80">
            Personal Portfolio • Next.js • Animations
          </h1>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <Image
            src="/images/revfinsure.png"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <a href="https://revfinsure.in/" target="_blank">
            <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white hover:text-cyan-300">
              Revfinsure Website
            </h1>
          </a>

          <h1 className="pt-2 font-medium text-white/80">
            Insurance Platform • Next.js • API Integration
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Project;
