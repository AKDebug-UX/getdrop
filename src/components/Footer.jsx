import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
    <div className="flex bg-gray-800 text-sm p-4 text-center text-white">
      <div>Copyright © 2018 - {currentYear} bnbchain.org. All Rights reserved.</div>
      <div>Copyright © 2018 - {currentYear} bnbchain.org. All Rights reserved.</div>
    </div>

    <div className="flex text-sm p-4 text-center text-black">
      <div>Copyright © 2018 - {currentYear} bnbchain.org. All Rights reserved.</div>
      <div className="hover:text-bnbcolor">English</div>
    </div>
    </>
  );
};

export default Footer;
