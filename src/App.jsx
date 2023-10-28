import React from "react";
import Hero from "./components/Hero";
import Ecosystem from "./components/Ecosystem";
import BuildBNBChain from "./components/BuildBNBChain/index";
import DappBay from "./components/DappBay";
import Community from "./components/Community";
import Footer from "./components/Footer";

const App = () => {

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <div className="bg-white rounded-t-[20rem]">
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
