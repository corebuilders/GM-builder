import React from "react";
import BackgroundImageDiv from "./BGImageDiv";

const Home_comp3 = () => {
  return (
    <div className="bg-black w-full py-[5.9375rem] flex-col items-start justify-center">
      <b className="w-[52.313rem] relative text-[5.125rem] mx-auto capitalize pb-2 block font-inria-serif text-white text-center ">
        Write, Influence, Earn
      </b>
      <b className="w-[27.063rem] relative text-[1.625rem] mx-auto capitalize pb-[30px] block font-inria-serif text-[#969696] text-center">
        Get Paid for Your Articles and blogs
      </b>
      <div className="relative pb-[79px]">
        <div className="w-[1243px] h-[517px] flex items-center justify-center mx-auto relative">
          <BackgroundImageDiv
            classs="pb-[33px] "
            imageUrl="https://i.imgur.com/pVG3JyL.jpeg"
          >
            <div className="flex items-end justify-center w-full h-full  relative ">
              <div className="w-[212px] relative shadow-[0px_1px_0px_rgba(0,_0,_0,_0.05),_0px_4px_4px_rgba(0,_0,_0,_0.05),_0px_10px_10px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(20px)] rounded-button-corner-radius [background:linear-gradient(0deg,_rgba(94,_82,_71,_0.5),_rgba(34,_34,_34,_0.25))] box-border h-[3.875rem] flex flex-row items-center justify-center py-button-vertical-padding px-button-horizontal-padding text-center text-[1.438rem] text-white font-inter border-[1px] border-solid border-[#ffffff0d]">
                <div className="relative leading-[1.25rem] font-medium">
                  Start Writing
                </div>
              </div>
            </div>
          </BackgroundImageDiv>
        </div>
      </div>
      <b className="w-max pb-[5.625rem] px-11 relative text-[3.563rem] capitalize inline-block font-inria-serif text-white text-left">
        <p className="m-0">upgrade your knowledge.</p>
        <p className="m-0">bit by bit.</p>
      </b>
    </div>
  );
};

export default Home_comp3;
