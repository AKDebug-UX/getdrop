import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="flex bg-[#fafafa] p-4 py-12 sm:pl-[5em] gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center items-start justify-between text-black">
        <div className="flex flex-col items-start justify-start text-black">
          <h1 className="text-[20px] sm:text-2xl font-bold">Explore</h1>
          <div className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]">Trust Wallet</div>
          <div className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]">Binance Wallet</div>
          <div className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]">DappBay</div>
          <div className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]">BTokens</div>
        </div>
        <div className="flex flex-col items-start justify-start text-black">
          <h1 className="text-[20px] sm:text-2xl font-bold">Build</h1>
          <div className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]">Developer Portal</div>
          <div className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]">SDKs</div>
          <div className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]">Whitepaper</div>
          <div className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]">Binance Wallet Integration</div>
          <div className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]">Technology Forum</div>
        </div>
        <div className="flex flex-col items-start justify-start text-black">
          <h1 className="text-[20px] sm:text-2xl font-bold">Participate</h1>
          <div className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]">Events</div>
          <div className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]">MVB Program</div>
          <div className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]">Hackathon</div>
          <div className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]">Developer Programs</div>
          <div className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]">Martians Program</div>
          <div className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]">Bug Bounty</div>
        </div>
        <div className="flex flex-col items-start justify-start text-black">
          <h1 className="text-[20px] sm:text-2xl font-bold">About</h1>
          <div className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]">Privacy Policy</div>
          <div className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]">Terms of Use</div>
          <div className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]">Careers</div>
          <div className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]">Verification</div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row text-sm p-4 gap-2 text-center items-center justify-between text-black">
        <div>Copyright © 2018 - {currentYear} bnbchain.org. All Rights reserved.</div>
        <button className="flex hover:text-[#F3BA2F] gap-2 items-center justify-center">
          <ion-icon name="logo-discord"></ion-icon>English
          <ion-icon name="chevron-down-outline"></ion-icon>
        </button>
      </div>
    </>
  );
};

export default Footer;
