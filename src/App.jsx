import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ecosystem from "./components/Ecosystem";
import BuildBNBChain from "./components/BuildBNBChain/index";
import DappBay from "./components/DappBay";
import Community from "./components/Community";
import Footer from "./components/Footer";

const App = () => {

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Ecosystem />
      <BuildBNBChain />
      <DappBay />
      <Community />
      <Footer />
    </div>
  );
};

export default App;
