import React from "react";
import zero2hero from "../../assets/images/zero2hero.png";
import mvb from "../../assets/images/mvb.png";

const DeveloperPrograms = () => {

  return (
    <>
      <h1 className="text-2xl sm:text-5xl text-left text-white mt-12 ml-6 md:ml-12 font-bold">Developer Programs</h1>
      <div className="relative rounded-2xl w-[90%] mt-6 mx-auto flex flex-col lg:flex-row gap-6 items-center justify-between">
        <div className="relative bg-black rounded-2xl w-full mx-auto flex flex-col-reverse gap-6 items-center justify-center">
          <div className="flex flex-col px-5 py-6 pb-10 items-center md:items-center">
            <h1 className="text-2xl sm:text-4xl text-white font-bold w-full">Zero2Hero Builder Series</h1>
            <p className="mt-4 text-gray-400 text-[15px] sm:text-[18px]">
              BNB Chain Zero2Hero Series is a 6-month online Bootcamp-hackathon-Incubator
              program from February to July 2023 which will welcome developers to build tools for mass adoption.
            </p>
            <a href="https://bnb.getdrop.live/en/zero2hero-builder-series">
              <button
                className="btn-primary2 text-white border border-white py-4 px-6 mt-3 text-center items-start justify-start hover:text-black hover:bg-white">Learn More</button>
            </a>
          </div>
          <img src={zero2hero} className="flex w-full md:h-[20rem] rounded-t-2xl right-0 items-end justify-end" />
        </div>

        <div className="relative bg-black rounded-2xl w-full mx-auto flex flex-col-reverse gap-6 items-center justify-center">
          <div className="flex flex-col px-5 py-6 pb-10 items-center md:items-center">
            <h1 className="text-2xl sm:text-4xl text-white font-bold w-full">MVB Program</h1>
            <p className="mt-4 text-gray-400 text-[15px] sm:text-[18px]">
              A BNB-focused accelerator program between Binance Labs and BNB Chain to incubate projects;
              helping them grow more organically through coaching, grants/investment, and network support.
            </p>
            <a href="https://bnb.getdrop.live/en/bsc-mvb-program">
              <button
                className="btn-primary2 text-white border border-white py-4 px-6 mt-3 text-center items-start justify-start hover:text-black hover:bg-white">Learn More</button>
            </a>
          </div>
          <img src={mvb} className="flex w-full md:h-[20rem] rounded-t-2xl right-0 items-end justify-end" />
        </div>
      </div><br /><br />
      <hr className="w-[90%] mx-auto text-center items-center justify-center" />
      <br /><br />
      <a href="https://bnb.getdrop.live/en/developers/developer-programs">
        <button
          className="btn-primary2 text-white border border-white py-4 px-12 text-center items-start justify-start hover:text-black hover:bg-white">See All Programs</button>
      </a>
    </>
  );
};

export default DeveloperPrograms;
