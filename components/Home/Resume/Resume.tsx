"use client";
import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
  return (
    <div id="resume" className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Work <span className="text-cyan-200">Experience</span>
          </h1>

          <div className="mt-10" data-aos="zoom-in" data-aos-anchor-placement="top-center">
            <ResumeCard
              Icon={FaCodepen}
              role="Software Development Engineer"
              company="Revfin"
              date="Jan 2026 – Present"
              description={[
                "Built fintech web apps using React, Next.js and TypeScript",
                "Developed reusable UI architecture",
                "Integrated REST APIs with MongoDB",
                "Improved platform performance and load efficiency",
              ]}
            />
            <ResumeCard
              Icon={FaReact}
              role="Full Stack Developer"
              company="NBCS Technology"
              date="Jan 2025 – Dec 2025"
              description={[
                "Developed Revfin website, CEO portfolio and Revfinsure platform",
                "Built scalable UI components",
                "Integrated APIs and managed AWS deployments",
                "Reduced load time by ~30%",
              ]}
            />
            <ResumeCard
              Icon={BsDatabase}
              role="Software Developer"
              company="Wise Neosco India Pvt Ltd"
              date="Sept 2024 – Dec 2024"
              description={[
                "Developed ERP UI using React and Material UI",
                "Implemented Redux state management",
                "Integrated backend APIs",
                "Collaborated with backend teams for data flow",
              ]}
            />
          </div>
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-200">Education</span>
          </h1>

          <div className="mt-10" data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="300">
            <ResumeCard
              Icon={BiBadge}
              role="Master of Computer Applications"
              company="Chandigarh University"
              date="Aug 2022 – June 2024"
              description={[
                "CGPA: 8.29",
                "Focused on full stack development and modern web technologies",
              ]}
            />
            <ResumeCard
              Icon={BsDatabase}
              role="Bachelor of Science"
              company="Guru Jambheshwar University of Science and Technology"
              date="Sept 2019 – May 2022"
              description={[
                "CGPA: 8.24",
                "Built strong foundation in mathematics and problem solving",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
