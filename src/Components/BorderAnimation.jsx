import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function BorderAnimation({ title }) {
  const BorderRef = useRef();
  const [border, setBorder] = useState();

  useEffect(() => {
    setBorder(BorderRef.current.querySelector("#borderline"));
  });

  const handleMouseEnter = () => {
    gsap.to(border, {
      width: "100%",
      duration: 0.4,
    });
  };
  const handleMouseLeave = () => {
    gsap.to(border, {
      width: "0%",
      duration: 0.4,
    });
  };
  return (
    <div
      ref={BorderRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="inline-block my-1 overflow-hidden"
    >
      <h1 className="cursor-pointer">{title}</h1>
      <div id="borderline" className="w-0 h-[2px] bg-white"></div>
    </div>
  );
}

export default BorderAnimation;
