"use client";
import { NavLinks } from "@/constants/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
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

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";
  return (
    <div className="lg:hidden">
      <div
        className={`fixed inset-0 ${navOpen} transform transition-all right-0 duration-500 z-[100002] bg-black opacity-70 w-full h-screen`}
      ></div>

      <div
        className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm-w-[60%] bg-cyan-800 space-y-6 z-[100050] right-0 `}
      >
        {NavLinks.map((link) => {
  return (
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

          // URL update
          history.pushState(null, "", link.url);

          // mobile nav close
          closeNav();
        }
      }}
      className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]"
    >
      {link.label}
    </button>
  );
})}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default MobileNav;
