import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Button({ title, containerClass }) {
  const ButtonRef = useRef();
  const [background, setBackGround] = useState();
  useEffect(() => {
    setBackGround(ButtonRef.current.querySelector("#bg"));
  });
  const handleMouseEnter = () => {
    gsap.to(background, {
      top: "0%",
      duration: 0.3,
      ease: "power2.inOut",
    });
  };
  const handleMouseLeave = () => {
    gsap.to(background, {
      top: "100%",
      duration: 0.3,
      ease: "power2.inOut",
    });
  };
  return (
    <div className="inline-block mt-5">
      <div
        ref={ButtonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`border cursor-pointer uppercase border-PrimaryGray text-PrimaryGray transition-all delay-200 ease-in-out duration-75 hover:text-white overflow-hidden relative rounded-full ${containerClass}`}
      >
        <div className="px-2 py-1 text-base lg:text-lg">{title}</div>
        <div
          id="bg"
          className="bg-PrimaryGray w-full rounded-full text-base lg:text-lg absolute left-0 top-[100%] py-1 px-2"
        >
          {title}
        </div>
      </div>
    </div>
  );
}

export default Button;
