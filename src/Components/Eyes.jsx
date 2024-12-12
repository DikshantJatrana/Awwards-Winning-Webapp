import React, { useEffect, useState } from "react";

function Eyes() {
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
    <div className="relative w-full h-[42vh] md:h-screen overflow-hidden">
      <div className="relative w-full h-[100%] bg-center bg-cover bg-[url('/img/eyes.jpg')]">
        <div className="absolute flex top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] gap-4">
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
    </div>
  );
}

export default Eyes;
