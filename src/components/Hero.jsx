import React from "react";
import hero from "../assets/images/hero.png";
import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
const Hero = () => {

  return (
    <div className="h-auto">
      <Navbar />
      <section className="flex pt-[7em] md:pt-[8em] pb-[2em] md:pb-[4em] lg:pb-[6em] mx-5 md:mx-12 lg:ml-12 lg:flex-row flex-col items-center justify-center">
        <div className="flex-1">
          <div className="mx-auto lg:text-left text-center">
            <h1 className="md:text-7xl text-5xl leading-normal text-white font-bold">FREE
              <span className="text-[#F3BA2F]"> BNB TOKEN</span><br /> AIRDROP
            </h1>
            <div className="lg:text-lg text-md leading-normal mt-4 font-normal text-white">
              Get a random amount between 1 to 10 BNB right now! <br /> Ready for massive user access.
            </div>
            <button className="btn-primary bg-white py-5 mt-8 text-center w-full lg:w-[20em]">GET AIRDROP</button>
          </div>
        </div>

        <div className="flex-1 lg:flex hidden items-center justify-center">
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <img className="lg:w-[40em] h-[30em] relative" src={hero} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
