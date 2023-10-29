import React from "react";
import buildbg from "../../assets/images/build-code-1.png";

const BNBChain = () => {

  return (
    <>
      <div className="relative rounded-2xl w-[90%] mx-auto flex flex-col lg:flex-row gap-6 items-center justify-between">
        <div className="flex flex-col px-3 items-center md:items-start">
          <h1 className="text-2xl sm:text-5xl text-left font-bold"><span className="text-[#F3BA2F]">Build</span> on BNB Chain</h1>
          <p className="mt-4 text-gray-400 text-left text-[20px]">BNB Smart Chain (BSC) supports the most popular programming
            languages, flexible tools, and comes with clear and canonical documentation.
            You can quickly start and deploy your application on a blockchain designed with real use in mind.
          </p>
          <div className="relative rounded-2xl w-full mx-auto mt-6 flex flex-col sm:flex-row gap-6 items-center justify-start">
            <button className="btn-primary bg-white py-4 px-6 mt-3 text-center items-start justify-start">Start Building</button>
            <a href="https://docs.bnbchain.org/docs/overview">
              <button
                className="btn-primary2 text-white border border-white py-4 px-6 mt-3 text-center items-start justify-start hover:text-black hover:bg-white">Read the Docs</button>
            </a>
          </div>
        </div>
        <img src={buildbg} className="flex w-full lg:w-[30rem] xl:w-[40rem] right-0 items-end justify-end" />
      </div>

      <div className="flex p-5 pt-12 gap-4 md:flex-row flex-col text-left items-start justify-between md:px-[6%]">
        <div className="flex flex-col items-start justify-start text-white w-full">
          <h1 className="text-[20px] sm:text-2xl font-bold"><span className="text-[20px] text-[#F3BA2F]">// </span>Best EVM Compatible</h1>
          <div className="text-gray-400 mt-2 text-left text-[15px]">The best-performing EVM compatible layer 1. Fully compatible tooling for EVM with up to 35 times of capacity.</div>
        </div>
        <div className="flex flex-col items-start justify-start text-white w-full">
          <h1 className="text-[20px] sm:text-2xl font-bold"><span className="text-[20px] text-[#F3BA2F]">// </span>Massive User Base</h1>
          <div className="text-gray-400 mt-2 text-left text-[15px]">Handling the largest daily active users and the highest peak EVM transactions with economical fees.</div>
        </div>
      </div>

      <div className="flex p-5 gap-4 md:flex-row flex-col text-left items-start justify-between md:px-[6%]">
        <div className="flex flex-col items-start justify-start text-white w-full">
          <h1 className="text-[20px] sm:text-2xl font-bold"><span className="text-[20px] text-[#F3BA2F]">// </span>Most Diversified Assets APIs</h1>
          <div className="text-gray-400 mt-2 text-left text-[15px]">Full support on all popular tokens via the most powerful Binance Bridge. The greatest opportunity for composability.</div>
        </div>
        <div className="flex flex-col items-start justify-start text-white w-full">
          <h1 className="text-[20px] sm:text-2xl font-bold"><span className="text-[20px] text-[#F3BA2F]">// </span>Strongest Ecosystem</h1>
          <div className="text-gray-400 mt-2 text-left text-[15px]">Supported by a robust ecosystem of top-tier RPC plants, wallets, blockchain explorers, data indices, and substantial grants.</div>
        </div>
      </div>
    </>
  );
};

export default BNBChain;
