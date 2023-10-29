import React from "react";
import wallet from "../assets/images/wallet.png";
import GetBNB from "../assets/images/GetBNB.png";
import dApp from "../assets/images/dApp.png";

const Ecosystem = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-black">
      <div className="text-center">
        <h1 className="text-2xl sm:text-5xl font-bold">
          Join the BNB Chain  <span className="text-[#F3BA2F]">Ecosystem</span>
        </h1>
        <p className="text-gray-400 mt-3 text-[20px]">Get started in 3 steps to dive into the world of BNB Chain.</p>
      </div>
      <div className="py-5 mx-auto mt-12 mb-4 flex gap-11 lg:flex-row flex-col items-center w-[90%]">
        <div className="bg-[#fafafa] relative pl-8 pt-5 rounded-2xl w-full mx-auto flex flex-col gap-3 items-start hover:bg-white shadow-sm hover:shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold">Download a wallet </h1>
          <p className="text-gray-400 text-[15px] sm:text-[18px] w-[80%]">A wallet helps you connect to BNB Chain and manage your funds.</p>
          <button className="btn-primary border border-black py-4 px-6 mt-3 text-center items-start hover:text-white hover:bg-black">Download Wallet</button>
          <div className="mx-auto flex gap-11 flex-row items-center justify-between w-full">
            <div></div>
            <img src={wallet} className="w-[12em] md:w-auto right-0 items-end justify-end" />
          </div>
        </div>

        <div className="bg-[#fafafa] relative pl-8 pt-5 rounded-2xl w-full mx-auto flex flex-col gap-3 items-start hover:bg-white shadow-sm hover:shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold w-[80%]">BNB is the currency of BNB Chain - you can use it in...</h1>
          {/* <p className="text-gray-400 text-[20px]">A wallet helps you connect to BNB Chain and manage your funds.</p> */}
          <button className="btn-primary border border-black py-4 px-6 mt-3 text-center items-start hover:text-white hover:bg-black">Get BNB</button>
          <div className="mx-auto flex gap-11 flex-row items-center justify-between w-full">
            <div></div>
            <img src={GetBNB} className="w-[12em] md:w-auto right-0 items-end justify-end" />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] relative rounded-2xl w-[90%] mx-auto flex flex-row gap-6 items-center justify-between hover:bg-white shadow-sm hover:shadow-lg">
        <div className="flex flex-col px-8 py-5 items-start">
          <h1 className="text-2xl sm:text-3xl font-bold">Use a dApp</h1>
          <p className="text-gray-400 text-[15px] sm:text-[18px]">Discover the hottest projects on BNB Chain.</p>
          <a href="https://dappbay.bnbchain.org/">
            <button className="btn-primary border border-black py-4 px-6 mt-3 text-center items-start justify-start hover:text-white hover:bg-black">Find Your First dApp</button>
        </a>
          </div>
        <img src={dApp} className="md:flex hidden w-[12em] md:w-auto right-0 items-end justify-end" />
      </div>
    </section>
  );
};

export default Ecosystem;
