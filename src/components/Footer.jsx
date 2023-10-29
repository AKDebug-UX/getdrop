import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="flex bg-[#fafafa] p-4 py-12 sm:pl-[5em] gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center items-start justify-between text-black">
        <div className="flex flex-col items-start justify-start text-black">
          <h1 className="text-[20px] sm:text-2xl font-bold">Explore</h1>
          <a className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]" href="https://trustwallet.com/">Trust Wallet</a>
          <a className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]" href="https://bnb.getdrop.live/en/binance-wallet">Binance Wallet</a>
          <a className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]" href="https://dappbay.bnbchain.org/">DappBay</a>
          <a className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]" href="https://bnb.getdrop.live/en/btokens">BTokens</a>
        </div>
        <div className="flex flex-col items-start justify-start text-black">
          <h1 className="text-[20px] sm:text-2xl font-bold">Build</h1>
          <a className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]" href="https://bnb.getdrop.live/en/developers">Developer Portal</a>
          <a className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]" href="https://docs.bnbchain.org/docs/beaconchain/exchange-integration/#sdks">SDKs</a>
          <a className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]" href="https://github.com/bnb-chain/whitepaper">Whitepaper</a>
          <a className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]" href="https://binance-wallet.gitbook.io/binance-chain-wallet/dev/get-started">Binance Wallet Integration</a>
          <a className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]" href="https://forum.bnbchain.org/">Technology Forum</a>
        </div>
        <div className="flex flex-col items-start justify-start text-black">
          <h1 className="text-[20px] sm:text-2xl font-bold">Participate</h1>
          <a className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]" href="https://bnb.getdrop.live/en/events">Events</a>
          <a className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]" href="https://bnb.getdrop.live/en/bsc-mvb-program">MVB Program</a>
          <a className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]" href="https://bnb.getdrop.live/en/kr-hackathon">Hackathon</a>
          <a className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]" href="https://bnb.getdrop.live/en/developers/developer-programs">Developer Programs</a>
          <a className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]" href="https://bnb.getdrop.live/en/martians-program">Martians Program</a>
          <a className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]" href="https://bugcrowd.com/binance">Bug Bounty</a>
        </div>
        <div className="flex flex-col items-start justify-start text-black">
          <h1 className="text-[20px] sm:text-2xl font-bold">About</h1>
          <a className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]" href="https://bnb.getdrop.live/en/privacy-policy">Privacy Policy</a>
          <a className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]" href="https://bnb.getdrop.live/en/terms">Terms of Use</a>
          <a className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]" href="https://bnb.getdrop.live/en/careers">Careers</a>
          <a className="text-gray-400 hover:text-[#F3BA2F] mt-2 text-[15px]" href="https://bnb.getdrop.live/en/official-verification">Verification</a>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row text-[12px] sm:text-sm py-4 px-12 gap-2 text-center items-center justify-between text-black">
        <div>Copyright © 2018 - {currentYear} bnbchain.org. All Rights reserved.</div>
        <button className="flex hover:text-[#F3BA2F] gap-2 items-center justify-center">
          <ion-icon name="globe-outline"></ion-icon>English
          <ion-icon name="chevron-down-outline"></ion-icon>
        </button>
      </div>
    </>
  );
};

export default Footer;
