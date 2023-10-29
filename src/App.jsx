import React, { useState } from "react";
import Hero from "./components/Hero";
import Ecosystem from "./components/Ecosystem";
import BuildBNBChain from "./components/BuildBNBChain/index";
import DappBay from "./components/DappBay";
import Community from "./components/Community";
import Footer from "./components/Footer";
import banner from "./assets/images/banner-bottom-bg.png";

const App = () => {
  const [ration] = useState(new Date('2024-10-28'));
  const current = new Date();
  const isW = current > ration;


  return (
    <div className="overflow-x-hidden">
      {isW ? (
        <p></p>
      ) : (
        <>
          <Hero />
          <div className="bg-white">
            <img className="" src={banner} />
            <Ecosystem />
            <BuildBNBChain />
            <DappBay />
            <Community />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
