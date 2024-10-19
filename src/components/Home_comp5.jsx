// import React from 'react'

import BackgroundImageDiv from "./BGImageDiv";

const Home_comp5 = () => {
  return (
    <div className=" bg-black relative px-11 h-[409px] mx-auto w-[90%]">
      <BackgroundImageDiv
        classs={`border-[1px] border-solid border-[#3b3b3b] flex items-center h-[409px] w-full justify-start p-[30px]`}
        imageUrl={`https://i.imgur.com/RCJuj5h.png`}
      >
        <div className="w-[230px] top-7 p-2 relative box-border flex items-center justify-around h-[3.625rem] overflow-hidden text-left text-[1rem] text-white  font-inter border-[0.5px] border-solid border-white">
          <input
            placeholder="Enter Your Email"
            className=" flex items-center justify-center h-full mx-auto  w-[70%] bg-transparent placeholder:text-[#656565] outline-none "
          />
          <img
            className=" relative right-3 cursor-pointer w-[26.5px] h-[0.781rem]"
            alt=""
            src="https://i.imgur.com/q7ypV5B.png"
          />
        </div>
      </BackgroundImageDiv>
    </div>
  );
};

export default Home_comp5;
