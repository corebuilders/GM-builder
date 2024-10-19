/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <div className=" flex flex-col justify-center bg-black items-center ">
      <img
        src="https://i.imgur.com/ARpUAx4.png"
        alt=""
        className="w-[537px] h-[521px] object-cover"
      />
      {/* <img
        src="https://i.imgur.com/lxaS5XJ.png"
        alt=""
        className="w-[74px] h-[99px] pb-11 object-cover"
      /> */}
      {/* <div className="w-[19.313rem] pb-[32px] relative text-[1.125rem] capitalize font-semibold font-inter text-left inline-block text-white">
        <span className="text-[#7d7d7d]">Built by</span>
        <span className="text-[#FFD000]">{` `}</span>
        <span className="[text-decoration:underline]">#Builders</span>
        <span className="text-[#7d7d7d]"> in Hack’n Heights</span>
      </div> */}
      <div className="w-[22.313rem] pb-11 relative text-[1.125rem] capitalize font-semibold font-inter text-white text-left inline-block">
        © 2024 gmBuilders | All rights reserved
      </div>
    </div>
  );
};

export default Footer;
