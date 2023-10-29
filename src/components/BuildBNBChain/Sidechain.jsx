import React from "react";
import buildbg from "../../assets/images/bas-bg.png";

const Sidechain = () => {

  return (
    <>
      <div className="relative rounded-2xl w-[90%] mt-3 mx-auto flex flex-col-reverse lg:flex-row gap-6 items-center justify-between">
        <div className="flex flex-col px-1 items-center md:items-start">
          <h1 className="text-2xl sm:text-5xl text-left font-bold w-full">Scale with<span className="text-[#F3BA2F]"> BNB Sidechain</span></h1>
          <p className="mt-4 text-gray-400 text-left text-[20px]">BNB Sidechain is an infrastructure
            introduced to help developers and the application community to build and run their
            dedicated blockchain as a focused value system for a massive number of users while
            still maintaining a close connection with BNB Chain.
          </p>
        </div>
        <img src={buildbg} className="flex w-[8rem] md:w-[18rem] right-0 items-end justify-end" />
      </div>

      <div className="flex p-5 pt-12 gap-4 md:flex-row flex-col text-left items-start justify-between md:px-[6%]">
        <div className="flex flex-col items-start justify-start text-white w-full">
          <h1 className="text-[20px] sm:text-2xl font-bold"><span className="text-[20px] text-[#F3BA2F]">// </span>Dedication</h1>
          <div className="text-gray-400 mt-2 text-left text-[15px]">A blockchain dedicated to the application logic with the independent community governance and economy.</div>
        </div>
        <div className="flex flex-col items-start justify-start text-white w-full">
          <h1 className="text-[20px] sm:text-2xl font-bold"><span className="text-[20px] text-[#F3BA2F]">// </span>Sustainability</h1>
          <div className="text-gray-400 mt-2 text-left text-[15px]">BNB Sidechain is a high-performance blockchain with high TPS and ultra-low gas fees.</div>
        </div>
      </div>

      <div className="flex p-5 gap-4 md:flex-row flex-col text-left items-start justify-between md:px-[6%]">
        <div className="flex flex-col items-start justify-start text-white w-full">
          <h1 className="text-[20px] sm:text-2xl font-bold"><span className="text-[20px] text-[#F3BA2F]">// </span>Integration</h1>
          <div className="text-gray-400 mt-2 text-left text-[15px]">Projects that own a BNB Sidechain are also a part of the broader BNB Chain ecosystem.</div>
        </div>
        <div className="flex flex-col items-start justify-start text-white w-full">
          <h1 className="text-[20px] sm:text-2xl font-bold"><span className="text-[20px] text-[#F3BA2F]">// </span>Support</h1>
          <div className="text-gray-400 mt-2 text-left text-[15px]">BNB Sidechain is backed by the largest community of users and developers.</div>
        </div>
      </div>
    </>
  );
};

export default Sidechain;
