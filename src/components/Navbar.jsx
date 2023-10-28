import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {

  return (
    <nav className={`fixed w-full left-0 top-0 z-[999]`}>
      <div className="flex items-center justify-between">
        <div className="flex mx-7 gap-x-4 items-center justify-center">
          <img
            src={logo}
            alt=""
            className="w-[50px] h-[50px] object-cover bg-cyan-600 rounded-[50%]"
          />
          <h4 className="text-4xl text-bnbcolor uppercase font-bold">
            BNB<span className="font-normal">CHAIN</span>
          </h4>
        </div>
        <div className={`z-[999] `} >
          <ion-icon name="menu"></ion-icon>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
