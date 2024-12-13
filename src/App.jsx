import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen relative">
      <Home />
    </div>
  );
}

export default App;
