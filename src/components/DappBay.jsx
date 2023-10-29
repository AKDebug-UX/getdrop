import React from "react";
// import aboutImg from "../assets/images/IMG-20220624-WA0043.jpg";

const DappBay = () => {

  return (
    <div id="about" className="relative rounded-2xl bg-[#F3BA2F] w-[90%] p-8 my-[4em] mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
      <div className="flex flex-col px-3 items-center md:items-start md:w-[60%]">
        <h1 className="text-2xl sm:text-5xl mt-3 font-bold">Discover dApps on<br /></h1>
        <h1 className="text-2xl sm:text-5xl font-bold my-4 text-white">DappBay</h1>
        <p className="mt-4 text-black text-left text-[20px]">
          Easily navigate relevant dApps, swiftly explore and discover
          profitable early-stage projects, and effortlessly identify risky dApps on DappBay.
        </p>
        <a href="https://dappbay.bnbchain.org/">
          <button
            className="btn-primary2 text-black border border-black py-4 px-6 mt-8 text-center items-start justify-start hover:text-white hover:bg-black">Explore DappBay Now</button>
        </a>
      </div>
      <div></div>
    </div>
  );
};

export default DappBay;
