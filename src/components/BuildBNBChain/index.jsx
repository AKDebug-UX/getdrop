import React from "react";
import buildbg from "../../assets/images/build-code-bg.png";
import BNBChain from "./BNBChain";
import Sidechain from "./Sidechain";
import DeveloperPrograms from "./DeveloperPrograms";
import Greenfield from "./Greenfield";

const BuildBNBChain = () => {

  return (
    <section className="py-10 bg-[#1e2026] relative">
      <img src={buildbg} className="items-end justify-end" />
      <div className="text-white text-center">
        <BNBChain />
        <Greenfield />
        <DeveloperPrograms />
        <Sidechain />
      </div>
    </section>
  );
};

export default BuildBNBChain;
