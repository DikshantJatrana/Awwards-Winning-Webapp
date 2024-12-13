import React, { useRef } from "react";
import Button from "./Button";
import gsap from "gsap";

function Cards({ title, img, left, buttonArray }) {
  const imgRef = useRef();

  const handleMouseEnter = () => {
    const img = imgRef.current.querySelector("#animateImg");
    const spans = imgRef.current.querySelectorAll("#animateText");
    gsap.to(img, {
      scale: 0.95,
      duration: 0.2,
      ease: "power1.inOut",
    });
    gsap.to(spans, {
      top: "0%",
      opacity: 1,
      duration: 0.4,
      ease: "power1.inOut",
      stagger: 0.05,
    });
  };

  const handleMouseLeave = () => {
    const img = imgRef.current.querySelector("#animateImg");
    const spans = imgRef.current.querySelectorAll("#animateText");

    gsap.to(img, {
      scale: 1,
      duration: 0.2,
      ease: "power1.inOut",
    });
    gsap.to(spans, {
      top: "100%",
      opacity: 0,
      duration: 0.4,
      ease: "power1.inOut",
      stagger: 0.05,
    });
  };

  return (
    <div className="w-full relative py-[5vh]">
      <div className="text-base text-PrimaryGray">
        <h1 className="flex items-center mb-3">
          <div className="w-2 h-2 rounded-full bg-PrimaryGray mr-3"></div>{" "}
          {title}
        </h1>
        <div
          ref={imgRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative cursor-pointer w-full aspect-[1.15]"
        >
          <img
            id="animateImg"
            className="rounded-2xl w-full aspect-[1.15]"
            src={img}
            alt="Featured"
          />
          <div
            className={`absolute uppercase z-10 h-[6.5vh] md:h-[11vh] leading-none overflow-hidden w-[100%] top-1/2 -translate-y-1/2 ${
              left
                ? "left-1/2 -translate-x-1/2 md:left-full"
                : "right-1/2 translate-x-1/2 md:right-full"
            } text-center whitespace-nowrap`}
          >
            <h1
              id="animateText"
              className="absolute top-[100%] left-1/2 -translate-x-1/2 text-[11.6vw] md:text-[6.52vw] text-primaryGreen font-founders font-semibold"
            >
              {title}
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {buttonArray.map((item, index) => {
            return <Button title={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Cards;
