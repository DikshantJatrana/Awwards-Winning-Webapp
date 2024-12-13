import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Marquee() {
  const marqueeRef = useRef();

  useEffect(() => {
    const marquee = marqueeRef.current;
    const texts = marquee.querySelectorAll("h1");

    texts.forEach((text) => {
      const width = text.offsetWidth; // Get the width of the text

      gsap.to(text, {
        x: `-${width}px`, // Move left by the text's width
        duration: 8, // Adjust speed as needed
        ease: "none", // Linear motion
        repeat: -1, // Infinite loop
      });
    });
  }, []);

  return (
    <div
      data-scroll-section
      data-scroll
      data-scroll-speed="-0.06"
      className="bg-PrimaryTeal relative rounded-t-lg w-full py-16 md:py-20"
    >
      <div
        ref={marqueeRef}
        className="font-founders flex font-semibold md:text-[40vh] text-[25vh] whitespace-nowrap leading-none overflow-hidden border-t border-b border-SecondGray"
      >
        <h1 className="uppercase text-SecondGray pr-2">
          We are ochi &nbsp;&nbsp;&nbsp;&nbsp;
        </h1>
        <h1 className="uppercase text-SecondGray pr-2">
          We are ochi &nbsp;&nbsp;&nbsp;&nbsp;
        </h1>
        <h1 className="uppercase text-SecondGray pr-2">
          We are ochi &nbsp;&nbsp;&nbsp;&nbsp;
        </h1>
      </div>
    </div>
  );
}

export default Marquee;
