import React from "react";
import BorderAnimation from "./BorderAnimation";

function Footer() {
  return (
    <div className="h-screen w-full relative bg-primaryGreen">
      <div className="h-screen w-full relative px-4 md:px-10 py-[7.5vh] md:grid md:grid-cols-3 text-PrimaryGray bg-SecondGray rounded-2xl">
        <div className="md:col-span-1 uppercase font-founders font-semibold text-[4rem] md:text-[5rem] lg:text-[6.5rem]">
          <h1 className="leading-[3rem] md:leading-[3.5rem] lg:leading-[5rem]">
            Eye-
          </h1>
          <h1 className="leading-[3rem] md:leading-[3.5rem] lg:leading-[5rem]">
            Opening
          </h1>
        </div>
        <div className="md:col-span-2">
          <h1 className="leading-[3rem] pb-8 md:leading-[3.5rem] lg:leading-[5rem] uppercase font-founders font-semibold text-[4rem] md:text-[5rem] lg:text-[6.5rem]">
            presentation
          </h1>
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <h1>S:</h1>
              <div className="grid mt-2 mb-8">
                <h2 className="underline">Instagram</h2>
                <h2 className="underline">Behance</h2>
                <h2 className="underline">Linkedin</h2>
                <h2 className="underline">Facebook</h2>
              </div>
              <h1>M:</h1>
              <div className="grid mt-2 mb-8">
                <h2 className="underline">Home</h2>
                <h2 className="underline">Service</h2>
                <h2 className="underline">Our Work</h2>
                <h2 className="underline">About Us</h2>
                <h2 className="underline">Insight</h2>
                <h2 className="underline">Contact US</h2>
              </div>
            </div>
            <div className="col-span-1">
              <h1>E:</h1>
              <div className="grid mt-2 mb-8">
                <h2 className="underline">
                  202-1965 W 4th <br /> Ave Vancouver <br /> Canada 30 Chukarina{" "}
                  <br /> St Lviv, Ukraine
                </h2>
              </div>
              <h1>M:</h1>
              <div className="grid mt-2 mb-8">
                <h2 className="underline">hello@ochi.design</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
