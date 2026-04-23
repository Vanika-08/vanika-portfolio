import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div id="services" className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        What I Can Do For You
      </h1>

      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <ServiceCard
            icon="/images/s1.png"
            name="UI and UX"
            description="Pixel-perfect, responsive interfaces from Figma with a focus on usability."
          />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <ServiceCard
            icon="/images/s2.png"
            name="Design and Creative"
            description="Reusable UI components and clean design systems for scalable apps."
          />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <ServiceCard
            icon="/images/s3.png"
            name="Frontend Development"
            description="Fast, scalable web apps using React, Next.js and modern tools."
          />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <ServiceCard
            icon="/images/s4.png"
            name="API Integration"
            description="Seamless API integration for dynamic and real-time applications."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
