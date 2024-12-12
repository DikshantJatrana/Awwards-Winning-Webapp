import React from "react";
import Button2 from "./Button2";
import { useState, useEffect } from "react";

function Ready() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const MouseX = e.clientX;
      const MouseY = e.clientY;

      const deltaX = MouseX - window.innerWidth / 2;
      const deltaY = MouseY - window.innerHeight / 2;
      const angle = Math.atan2(deltaX, deltaY) * (180 / Math.PI);

      setRotate(270 - angle);
    });
  });
  return (
    <div className="relative w-full h-[80vh] bg-primaryGreen rounded-t-2xl md:min-h-screen">
      <div className="text-[10vh] pt-[13%] md:pt-[0%] leading-[8vh] md:text-[22vh] text-PrimaryGray text-center font-founders font-semibold md:leading-[17vh] uppercase">
        <h1>Ready</h1>
        <h1>to start</h1>
        <h1>the Project?</h1>
      </div>
      <div>
        <div className="absolute flex top-[50%] left-[50%] translate-x-[-50%] gap-4">
          <div className="h-[12vh] md:h-[28vh] flex items-center justify-center aspect-square bg-white rounded-full">
            <div className="relative h-2/3 w-2/3 bg-PrimaryGray rounded-full">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              >
                <div className="bg-white rounded-full w-8 h-8"></div>
              </div>
            </div>
          </div>
          <div className="h-[12vh] md:h-[28vh] flex items-center justify-center aspect-square bg-white rounded-full">
            <div className="relative h-2/3 w-2/3 bg-PrimaryGray rounded-full">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              >
                <div className="bg-white rounded-full w-8 h-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute text-center left-1/2 -translate-x-1/2 bottom-[5vh]">
        <Button2
          title={"Start the Project"}
          containerClass={"bg-PrimaryGray text-white"}
        />
        <h1 className="uppercase my-2">Or</h1>
        <Button2
          title={"Hello@Ochi.design"}
          containerClass={"bg-PrimaryGreen text-"}
        />
      </div>
    </div>
  );
}

export default Ready;
