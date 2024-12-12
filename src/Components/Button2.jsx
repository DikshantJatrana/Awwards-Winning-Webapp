import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaCircleArrowUp } from "react-icons/fa6";

function Button2({ title, containerClass }) {
  const Button2Ref = useRef();
  const [bg, setBg] = useState();
  const [arrow, setArrow] = useState();
  useEffect(() => {
    setBg(Button2Ref.current.querySelector("#bg"));
    setArrow(Button2Ref.current.querySelector("#arrow"));
  });
  const handleMouseEnter = () => {
    gsap.to(bg, {
      top: "0%",
      duration: 0.5,
      ease: "power2.inOut",
    });
    gsap.to(arrow, {
      scale: 1,
      duration: 0.5,
      ease: "power2.inOut",
    });
  };
  const handleMouseLeave = () => {
    gsap.to(bg, {
      top: "100%",
      duration: 0.5,
      ease: "power2.inOut",
    });
    gsap.to(arrow, {
      scale: 0.15,
      duration: 0.5,
      ease: "power2.inOut",
    });
  };
  return (
    <div
      ref={Button2Ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`border border-PrimaryGray uppercase cursor-pointer overflow-hidden rounded-full inline-block relative text-sm md:text-base lg:text-lg ${containerClass}`}
    >
      <div className="z-10 relative duration-200 transition-all ease-in-out hover:text-white flex items-center gap-2 md:gap-3 lg:gap-4 pl-4 px-2 py-2 rounded-full">
        {title}
        <span className="rotate-45 text-lg md:text-2xl lg:text-3xl">
          <FaCircleArrowUp id="arrow" className="scale-[0.15]" />
        </span>
      </div>
      <div
        id="bg"
        className="bg-black z-0 text-black absolute top-[100%] flex items-center left-0 gap-4 pl-4 px-2 py-2 rounded-full"
      >
        {title}
        <span className="rotate-45 text-lg md:text-2xl lg:text-3xl">
          <FaCircleArrowUp />
        </span>
      </div>
    </div>
  );
}

export default Button2;
