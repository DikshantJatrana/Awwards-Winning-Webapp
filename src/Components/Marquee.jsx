import React from "react";

function Marquee() {
  return (
    <div className="bg-PrimaryTeal relative rounded-t-lg w-full py-16 md:py-20">
      <div className="font-founders flex gap-4 font-semibold md:text-[40vh] text-[25vh] whitespace-nowrap leading-none overflow-hidden border-t border-b border-SecondGray">
        <h1 className="upparcase text-SecondGray">We are ochi</h1>
        <h1 className="upparcase text-SecondGray">We are ochi</h1>
      </div>
    </div>
  );
}

export default Marquee;
