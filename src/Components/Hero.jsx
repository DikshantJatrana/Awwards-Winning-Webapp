import React from "react";
import Button from "./Button";
import AnimatedWords from "./AnimatedWords";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {
  const Wrods = ["We create", "eye-opening", "presentations"];
  const Text = [
    "For public and private companies",
    "From the first pitch to IPO",
  ];
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to("#scrollanimate", {
      top: "0%",
      duration: 0.2,
      delay: 0.4,
    });
    tl.to("#scrollanimate", {
      top: "100%",
      duration: 0.2,
      delay: 0.8,
    });
    gsap.from("#imgMove", {
      x: "-15vw",
      duration: 1.2,
    });
    gsap.from("#wordMove", {
      x: "-10vw",
      delay: 1,
      duration: 1.6,
    });
  });
  return (
    <div className="relative w-full h-screen overflow-x-hidden">
      <div className="text-[8.75vh] md:text-[13.5vh] uppercase px-4 md:px-10 py-28 md:py-36 pb-44 md:pb-40 font-founders font-bold leading-[6.8vh] md:leading-[9.4vh] text-PrimaryGray border-b border-zinc-600">
        {Wrods.map((item, index) => (
          <h1 id={index === 1 ? "wordMove" : ""} key={index}>
            {index === 1 && (
              <div
                id="imgMove"
                className="inline-block bg-PrimaryTeal h-[5.9vh] md:h-[8.55vh] aspect-video rounded-md"
              ></div>
            )}
            {item}
          </h1>
        ))}
      </div>
      <div className="font-montreal text-base md:text-lg mx-4 mt-4  md:flex md: items-center md:justify-between">
        {Text.map((textItem, textIndex) => (
          <h1 className="mt-5" key={textIndex}>
            {textItem}
          </h1>
        ))}
        <Button title={"Start The Project"} />
      </div>
      <div className="text-center relative overflow-hidden text-PrimaryGray mt-8 md:mt-12">
        <div className="text-SecondGray">Scroll</div>
        <div
          id="scrollanimate"
          className="absolute top-[-100%] left-[50%] translate-x-[-50%]"
        >
          Scroll
        </div>
      </div>
    </div>
  );
}

export default Hero;
