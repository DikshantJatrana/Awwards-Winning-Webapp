import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

function AnimatedWords({ title, containerClass }) {
  const WordsRef = useRef();

  const [Text1, setText1] = useState(null);
  const [Text2, setText2] = useState(null);
  const [Line, setLine] = useState(null);

  useEffect(() => {
    if (WordsRef.current) {
      setText1(WordsRef.current.querySelector("#text1"));
      setText2(WordsRef.current.querySelector("#text2"));
      setLine(WordsRef.current.querySelector("#line"));
    }
  }, []);

  let animate;
  let animate2;
  let lineAnimate;
  const handleHover = () => {
    animate = gsap.to(Text1, {
      y: -50,
      duration: 0.3,
    });
    animate2 = gsap.to(Text2, {
      y: -24,
      duration: 0.2,
    });
    lineAnimate = gsap.to(Line, {
      width: "100%",
      duration: 0.4,
      ease: "power2.inOut",
      transformOrigin: "left",
    });
    animate.play();
    animate2.play();
    lineAnimate.play();
  };
  const handleLeave = () => {
    if (animate) animate.reverse();
    if (animate2) animate2.reverse();
    if (lineAnimate) {
      gsap.to(Line, {
        width: "0%",
        duration: 0.4,
        ease: "power2.inOut",
        transformOrigin: "left",
      });
    }
  };
  return (
    <div
      ref={WordsRef}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className={`relative cursor-pointer overflow-hidden ${containerClass}`}
    >
      <div id="text1" className="">
        {title}
      </div>
      <div id="text2" className="absolute">
        {title}
      </div>
      <div id="line" className="w-[0px] h-[1px] bg-PrimaryGray"></div>
    </div>
  );
}

export default AnimatedWords;
