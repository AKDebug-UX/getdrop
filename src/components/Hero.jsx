import React from "react";
import hero from "../assets/images/IMG_20.jpg";
import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
const Hero = () => {

  const social_media = [
    {
      id: 1,
      logo: <GitHub />,
      url: "https://github.com/upraisertech",
    },

    {
      id: 2,
      logo: <LinkedIn />,
      url: "https://linkedin.com/in/upraisertech",
    },

    {
      id: 3,
      logo: <Twitter />,
      url: "https://www.twitter.com/upraisertech",
    },

    {
      id: 4,
      logo: <Instagram />,
      url: "https://www.instagram.com/upraisertech",
    },

    {
      id: 5,
      logo: <Facebook />,
      url: "https://www.facebook.com/upraisertech",
    },
  ];

  return (
    <div className="">
      <Navbar />
      <section className="flex py-10 md:flex-row flex-col items-center">
        <div className="flex-1">
          <div className="md:text-left text-center">
            <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">FREE
              <span className="text-cyan-600 md:text-6xl text-5xl"> BNB TOKEN</span> AIRDROP
            </h1>
            <div className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-black/2">
              Get a random amount between 1 to 10 BNB right now! Ready for massive user access.
            </div>
            <button className="btn-primary mt-8">GET AIRDROP</button>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm heroImg ">
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
