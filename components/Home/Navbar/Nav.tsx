"use client";
import { NavLinks } from "@/constants/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const smoothScrollTo = (targetY: number, duration = 800) => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  let startTime: number | null = null;

  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;

    const percent = Math.min(progress / duration, 1);

    const ease = 1 - Math.pow(1 - percent, 3);

    window.scrollTo(0, startY + distance * ease);

    if (progress < duration) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handLer = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handLer);

    return () => {
      window.removeEventListener("scroll", handLer);
    };
  }, []);
  return (
    <div
      className={`transition-all ${navBg ? "bg-[#0f142ed9] shadow-md" : "fixed"} duration-200 h-[12vh] z-[10000] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex0-col">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
            VANIKA
          </h1>
        </div>
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                const targetId = link.url.replace("#", "");
                const el = document.getElementById(targetId);

                if (el) {
                  const offset = 80;
                  const targetY =
                    el.getBoundingClientRect().top + window.scrollY - offset;

                  smoothScrollTo(targetY, 1000);
                  history.pushState(null, "", link.url);
                }
              }}
              className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="/Vanika_Resume.pdf"
            download
            className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-200 text-white flex items-center space-x-2"
          >
            <BiDownload className="w-5 h-5" />
            <span>Download CV</span>
          </a>
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 text-white lg:hidden cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
