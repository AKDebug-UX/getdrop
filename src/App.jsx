import React, { useState } from "react";
import Hero from "./components/Hero";
import Ecosystem from "./components/Ecosystem";
import BuildBNBChain from "./components/BuildBNBChain/index";
import DappBay from "./components/DappBay";
import Community from "./components/Community";
import Footer from "./components/Footer";
import banner from "./assets/images/banner-bottom-bg.png";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <div className="bg-white">
        <img className="" src={banner} />
        <Ecosystem />
        <BuildBNBChain />
        <DappBay />
        <Community />
        <Footer />
      </div>
    </div>
  );
};

export default App;
