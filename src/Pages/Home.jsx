import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Marquee from "../Components/Marquee";
import About from "../Components/About";
import Eyes from "../Components/Eyes";
import Featured from "../Components/Featured";
import Ready from "../Components/Ready";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="relative w-full min-h-screen font-montreal bg-SecondGray">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Eyes />
      <Ready />
      <Footer />
    </div>
  );
}

export default Home;
