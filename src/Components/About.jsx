import React from "react";
import Button2 from "./Button2";

function About() {
  return (
    <div className="w-full font-montreal bg-PrimaryTeal">
      <div className="w-full bg-primaryGreen rounded-t-lg">
        <div className="text-3xl py-16 md:py-24 md:text-4xl lg:text-5xl px-4 md:px-12 border-b border-PrimaryGray">
          <h1 className="max-w-[95%]">
            Ochi is a strategic presentation agency for forward-thinking
            businesses that need to raise funds, sell products, explain complex
            ideas, and hire great people.
          </h1>
        </div>
        <div className="py-4 px-4 grid gap-2 grid-cols-1 pb-6 md:pb-16 md:grid-cols-2 md:px-12">
          <div className="text-5xl inline-block md:col-span-1 md:text-6xl">
            Our approach:
            <Button2
              title={"READ MORE"}
              containerClass={"bg-PrimaryGray mt-4 md:mt-6 text-white"}
            />
          </div>
          <div className="mt-4 md:col-span-1">
            <img
              className="rounded-lg"
              src="/img/Homepage-Photo-1326x939.jpg"
              alt="photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
