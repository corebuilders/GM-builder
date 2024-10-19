// import React from 'react'

const Home_comp1 = () => {
  return (
    <div className="w-full h-full relative">
      <img
        className=" object-cover h-full w-full"
        src="https://i.imgur.com/i4juXJP.jpeg"
        alt=""
      />
      <div className="absolute  inset-0 m-auto flex items-end pb-[13rem] justify-center h-full">
        <div className="w-[245px] relative shadow-[0px_1px_0px_rgba(0,_0,_0,_0.05),_0px_4px_4px_rgba(0,_0,_0,_0.05),_0px_10px_10px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(20px)] rounded-button-corner-radius [background:linear-gradient(0deg,_rgba(94,_82,_71,_0.5),_rgba(34,_34,_34,_0.25))] box-border h-[3.875rem] flex flex-row items-center justify-center py-button-vertical-padding px-button-horizontal-padding text-center text-[1.438rem] text-white font-inter border-[1px] border-solid border-[#ffffff0d]">
          <div className="relative leading-[1.25rem] font-medium">
            Get Started
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_comp1;
