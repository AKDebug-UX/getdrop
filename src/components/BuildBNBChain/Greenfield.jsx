import React from "react";
import buildbg from "../../assets/images/home-sm.png";

const Greenfield = () => {

  return (
    <div className="relative bg-black mt-6 rounded-2xl w-[90%] mx-auto flex flex-col-reverse lg:flex-row gap-6 items-center justify-between">
      <div className="flex flex-col px-5 py-12 items-center md:items-start">
        <h1 className="text-2xl sm:text-5xl text-left text-[#2d8749] font-bold w-full">BNB Greenfield</h1>
        <p className="mt-4 text-white text-left text-[20px]">
          A Decentralized Data Storage System and Economy
        </p>
        <p className="mt-4 text-gray-400 text-left text-[15px] sm:text-[18px]">
          BNB Greenfield is decentralized storage infrastructure within the
          broader BNB Chain ecosystem where users and dApps can create,
          store and exchange data with full ownership to form a new data economy.
        </p>
        <a href="https://bnb.getdrop.live/en/greenfield">
          <button
            className="btn-primary2 text-white border border-white py-4 px-6 mt-3 text-center items-start justify-start hover:text-black hover:bg-white">Learn More</button>
        </a>
      </div>
      <img src={buildbg} className="flex w-full md:w-[30rem] md:h-[30rem] rounded-t-2xl md:rounded-t-none md:rounded-r-2xl right-0 items-end justify-end" />
    </div>
  );
};

export default Greenfield;
