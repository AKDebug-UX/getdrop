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
    <section className="min-h-screen flex py-10 mt-9 md:flex-row flex-col items-center">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
          <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm heroImg ">
            <img
              src={hero}
              alt=""
              className="w-full h-[400px] object-cover bg-cyan-600 rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Akorede Salaudeen</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Frontend Developer
          </h4>
          <a href="https://t.me/upraisertech">
            <button className="btn-primary mt-8">Contact Me</button>
          </a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            <div
              className="text-gray-600 cursor-pointer "
            >
              <div className="flex mt-10 items-center gap-7">
                {social_media.map((icon) => (
                  <a key={icon.id} href={icon.url}>
                    <span className="md:text-base hover:text-white text-xs">{icon.logo}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
