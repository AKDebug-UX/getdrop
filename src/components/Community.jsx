import React from "react";
import wallet from "../assets/images/wallet.png";
import GetBNB from "../assets/images/GetBNB.png";
import dApp from "../assets/images/dApp.png";
import { Telegram } from "@material-ui/icons";

const Community = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-black mx-auto items-center justify-center w-full">
      <div className="text-center">
        <h1 className="text-2xl sm:text-5xl font-bold">
          Get Involved, Be Part of the <br />  <span className="text-[#F3BA2F]">Community</span>
        </h1>
        <p className="text-gray-400 mt-3 block md:hidden text-center text-[15px]">BNB Chain is a global, decentralized network
          with developers, validators, users, HODLers and enthusiasts.</p>
        <p className="text-gray-400 mt-3 md:block hidden text-center text-[20px]">BNB Chain is a global, decentralized network
          with developers,<br /> validators, users, HODLers and enthusiasts.</p>
      </div>

      <div className="py-5 mx-auto mt-6 mb-4 gap-5 text-[20px] font-bold md:flex md:flex-row grid grid-cols-3 items-center justify-center w-full md:w-[80%]">
        <a className="bg-white px-9 py-5 rounded-2xl flex flex-col gap-4 items-center hover:text-white hover:bg-[#5765f1] shadow-lg w-full" href="https://discord.com/invite/QRTQvfhADQ">
          <ion-icon name="logo-discord"></ion-icon>
          <div className="text-[17px]">Discord</div>
        </a>
        <a className="bg-white px-9 py-5 rounded-2xl flex flex-col gap-4 items-center hover:text-white hover:bg-[#00acee] shadow-lg w-full" href="https://twitter.com/BNBChain">
          <ion-icon name="logo-twitter"></ion-icon>
          <div className="text-[17px]">Twitter</div>
        </a>
        <a className="bg-white px-9 py-5 rounded-2xl flex flex-col gap-4 items-center hover:text-white hover:bg-[#FF0000] shadow-lg w-full" href="https://www.youtube.com/channel/UCG9fZu6D4I83DStktBV0Ryw">
          <ion-icon name="logo-youtube"></ion-icon>
          <div className="text-[17px]">YouTube</div>
        </a>
        <a className="bg-white px-9 py-5 rounded-2xl flex flex-col gap-4 items-center hover:text-white hover:bg-[#0088cc] shadow-lg w-full" href="https://t.me/bnbchain">
          <Telegram />
          <div className="text-[17px]">Telegram</div>
        </a>
        <a className="bg-white px-9 py-5 rounded-2xl flex flex-col gap-4 items-center hover:text-white hover:bg-black shadow-lg w-full" href="https://github.com/bnb-chain">
          <ion-icon name="logo-github"></ion-icon>
          <div className="text-[17px]">GitHub</div>
        </a>
      </div>
    </section>
  );
};

export default Community;
