import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";

function Home() {
  return (
    <div className="relative w-full min-h-screen font-montreal bg-SecondGray">
      <Navbar />
      <Hero />
    </div>
  );
}

export default Home;
