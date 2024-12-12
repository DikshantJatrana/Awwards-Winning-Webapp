import React, { useEffect, useRef, useState } from "react";
import { IoMenuOutline, IoCloseSharp } from "react-icons/io5";
import AnimatedWords from "./AnimatedWords";
import BorderAnimation from "./BorderAnimation";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const navRef = useRef();
  const { y: currentScroll } = useWindowScroll();
  const [isVisible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState();

  useEffect(() => {
    if (currentScroll === 0) {
      setVisible(true);
    } else if (currentScroll < lastScroll) {
      setVisible(true);
    } else if (currentScroll > lastScroll) {
      setVisible(false);
    }
    setLastScroll(currentScroll);
  }, [currentScroll, lastScroll]);

  useGSAP(() => {
    gsap.to(navRef.current, {
      y: isVisible ? 0 : -100,
      opacity: isVisible ? 1 : 0,
      duration: 0.4,
      ease: "power1.inOut",
    });
  }, [isVisible]);
  const navItem = [
    "Services",
    "Our work",
    "About us",
    "Insights",
    "Contact Us",
  ];
  const OpenNavbar = () => {
    gsap.to("#navbar", {
      top: "0%",
      duration: 0.6,
    });
  };
  const CloseNavbar = () => {
    gsap.to("#navbar", {
      top: "-100%",
      duration: 0.6,
    });
  };
  return (
    <>
      <div
        ref={navRef}
        className="fixed z-50 w-full flex h-24 px-4 md:px-10 py-6 backdrop-blur-sm text-PrimaryGray items-center justify-between"
      >
        <div className="text-4xl md:text-5xl font-founders font-semibold cursor-pointer">
          Ochi
        </div>
        <IoMenuOutline
          onClick={OpenNavbar}
          className="text-4xl md:hidden rounded-full p-1 hover:bg-slate-500"
        />
        <div className="text-base lg:text-lg font-montreal hidden md:block">
          <div className="flex items-center">
            {navItem.map((item, navIndex) => (
              <AnimatedWords
                key={navIndex}
                title={item}
                containerClass={`mx-4 text-base ${navIndex === 4 && "ml-28"}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        id="navbar"
        className="fixed z-50 bg-PrimaryGray w-full h-screen text-white font-founders -top-[100%] left-0 md:hidden"
      >
        <div className="text-4xl py-8 px-10 md:text-5xl flex items-center justify-between font-founders font-semibol border-b border-zinc-700">
          <h1 className="cursor-pointer">Ochi</h1>
          <IoCloseSharp
            onClick={CloseNavbar}
            className="cursor-pointer z-[999] rounded-full p-1 hover:bg-slate-600"
          />
        </div>
        <div className="text-7xl px-10 text-white">
          {navItem.map((item, index) => (
            <BorderAnimation title={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
