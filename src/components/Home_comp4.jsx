// import React from 'react'

import BackgroundImageDiv from "./BGImageDiv";

const Home_comp4 = () => {
  return (
    <div
      style={{ gridTemplateRows: `530px  auto` }}
      className="grid grid-cols-12 bg-black pb-[150px] pt-[90px] gap-[48px] px-[43px] w-[100%] mx-auto p-1 "
    >
      {/* 1st column */}
      <div className="relative col-span-4">
        <div className="w-full relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000_50.9%)] h-[15.563rem]" />
        <BackgroundImageDiv
          classs={
            "border-[1px] border-solid border-[#3b3b3b] px-7 flex items-center justify-start "
          }
          imageUrl={`https://i.imgur.com/n9yeXKZ.png`}
        >
          <div className="w-[240px] bottom-12 flex items-center justify-center relative bg-[#FFFFFF7A] box-border h-[3.625rem] overflow-hidden text-left text-[1.5rem] text-white font-inter border-[1px] border-solid border-white">
            <div className=" capitalize font-semibold">Get started</div>
            <img
              className=" w-[1.656rem] h-[0.781rem]"
              alt=""
              src="https://i.imgur.com/CI4EIog.png"
            />
          </div>
        </BackgroundImageDiv>
      </div>
      {/* 2nd column */}
      <div className="relative col-span-4">
        <div className="w-full relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000_50.9%)] h-[15.563rem]" />
        <BackgroundImageDiv
          classs={
            "border-[1px] border-solid border-[#3b3b3b] px-7 flex items-center justify-start "
          }
          imageUrl={`https://i.imgur.com/4o3jeRa.png`}
        >
          <div className="w-[240px] bottom-12 flex items-center justify-center relative bg-[#FFFFFF7A] box-border h-[3.625rem] overflow-hidden text-left text-[1.5rem] text-white font-inter border-[1px] border-solid border-white">
            <div className=" capitalize font-semibold">Get started</div>
            <img
              className=" w-[1.656rem] h-[0.781rem]"
              alt=""
              src="https://i.imgur.com/CI4EIog.png"
            />
          </div>
        </BackgroundImageDiv>
      </div>
      {/* 3rd column */}
      <div className="relative col-span-4">
        <div className="w-full relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000_50.9%)] h-[15.563rem]" />
        <BackgroundImageDiv
          classs={
            "border-[1px] border-solid border-[#3b3b3b] px-7 flex items-center justify-start "
          }
          imageUrl={`https://i.imgur.com/HkyrJuT.png`}
        >
          <div className="w-[240px] bottom-12 flex items-center justify-center relative bg-[#FFFFFF7A] box-border h-[3.625rem] overflow-hidden text-left text-[1.5rem] text-white font-inter border-[1px] border-solid border-white">
            <div className=" capitalize font-semibold">Get started</div>
            <img
              className=" w-[1.656rem] h-[0.781rem]"
              alt=""
              src="https://i.imgur.com/CI4EIog.png"
            />
          </div>
        </BackgroundImageDiv>
      </div>
    </div>
  );
};

export default Home_comp4;
