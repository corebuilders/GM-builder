import React, { useState, useContext } from "react";
import PluralitySocialConnect from "plurality-social-connect";
import { Context } from "../context/ContextProvider";
import BackgroundImageDiv from "../components/BGImageDiv";
import { useLocation } from 'react-router-dom';



const ViewBlog = () => {

  const location = useLocation();
  // let data;
  // let blog;
  const [data, setData] = useState(null)
 const [blog, setBlog] = useState(null)
  const [paragraphs, setParagraphs] = useState(null);

  
  const {
    handleProfileDataReturned,
    handleGetAllAccounts,
    handleGetConnectedAccount,
    handleMessageSignature,
    handleVerifyMessageSignature,
    handleGetBalance,
    handleSendTransaction,
    handleGetBlockNumber,
    handleGetTransactionCount,
    handleReadFromContract,
    handleWriteToContract,
    handleErrorMessage,
    // renderData,
    profileData,
    childRef,
    detailBlog,
    recommendBlog,
  } = useContext(Context);
  
  const [isConnected, setIsConnected] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null)
  
  const hiddenButtonWrapperRef = React.useRef(null);
  
  const handleVisibleButtonClick = () => {
    if (hiddenButtonWrapperRef.current) {
      const hiddenButton =
        hiddenButtonWrapperRef.current.querySelector("button");
        if (hiddenButton) {
          hiddenButton.click();
      }
    }
  };
  React.useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
     setData(searchParams.get('data'));
    setBlog(searchParams.get('blog'));
    console.log("inside view blog ",data,blog)
  
   
  }, [])
  React.useEffect(() => {
    
    if (blog == 'Recommended For You' && recommendBlog!=null) {
      setCurrentBlog(recommendBlog[data - 1])
       setParagraphs(currentBlog?.content.trim().split("\n\n"));
    }
    else {
      if (detailBlog != null) {
        setCurrentBlog(detailBlog[data - 1]);
       let ss = currentBlog?.content.trim().split("\\n\\n");
      //  ss = ss.map((paragraph) => paragraph.split("\\n\\n"));
       setParagraphs(ss);

      }
      
    }

    
   
  }, [data,blog,recommendBlog,currentBlog])
  

  return (
    <div key={recommendBlog + detailBlog + data + blog}>
      {/* navbar */}
      <div className="flex justify-between items-center bg-black p-[18px]">
        <div className=" w-[128px] h-[103px] object-cover ">
          <img src="https://i.imgur.com/VSXWSCv.png" alt="" />
        </div>

        {/* wallet */}
        <div>
          <div className="w-[186px]">
            {/* hidden button */}
            <div ref={hiddenButtonWrapperRef} style={{ display: "none" }}>
              <PluralitySocialConnect
                options={{ apps: "facebook,twitter" }}
                onProfileDataReturned={async (d) => {
                  await handleProfileDataReturned(d);
                  setIsConnected(true);
                }}
                onGetAllAccounts={handleGetAllAccounts}
                onGetConnectedAccount={handleGetConnectedAccount}
                onGetMessageSignature={handleMessageSignature}
                onVerifyMessageSignature={handleVerifyMessageSignature}
                onGetBalance={handleGetBalance}
                onSendTransaction={handleSendTransaction}
                onGetBlockNumber={handleGetBlockNumber}
                onGetTransactionCount={handleGetTransactionCount}
                onReadFromContract={handleReadFromContract}
                onWriteToContract={handleWriteToContract}
                onErrorMessage={handleErrorMessage}
                // all customization params are optional
                customization={{
                  height: "30px",
                  width: "156px",
                  initialBackgroundColor: "#E8A123",
                  initialTextColor: "#FFFFFF",
                  flipBackgroundColor: "#12AE83",
                  flipTextColor: "#FFFFFF",
                }}
                ref={childRef}
              />
            </div>
            {/* showing button */}

            <div
              onClick={handleVisibleButtonClick}
              className="rounded-lg cursor-pointer w-full flex items-center justify-evenly relative box-border h-[3.25rem] overflow-hidden text-left text-[1.125rem] text-white font-inter border-[0.5px] border-solid border-[#FFFFFF4D]"
            >
              <img
                className={`flex items-center justify-center  object-cover ${
                  isConnected
                    ? `rounded-full w-[2rem]`
                    : `w-[1.188rem] h-[1.875rem]`
                }`}
                alt=""
                src={
                  isConnected
                    ? `${profileData.profileUrl}`
                    : `https://i.imgur.com/85UVZQv.png`
                }
              />
              <div className="flex items-center justify-center uppercase font-light">
                {isConnected ? `${profileData.name}` : `Connect`}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* blog content */}
      <div className="bg-black">
        <div className=" w-[1050px] mx-auto bg-black ">
          <div className="flex flex-col justify-center items-start ">
            <b
              key={currentBlog + data + blog + detailBlog + recommendBlog}
              className="w-[98%] relative text-[2.188rem] capitalize inline-block font-inria-serif text-white text-left"
            >
              {currentBlog?.name}
            </b>

            <div className="flex w-full mb-[37px] justify-between">
              <div className="flex gap-4 items-center justify-center">
                <img
                  className=" w-11 h-11 object-cover"
                  src="https://i.imgur.com/ooOn9TK.png"
                  alt=""
                />

                <div className="flex flex-col items-start justify-center w-max">
                  <div className="min-w-[8.813rem] relative text-[1.375rem] capitalize font-medium font-inter text-white text-left inline-block">
                    Aditya kumar
                  </div>
                  <div className="flex gap-6 items-center justify-between ">
                    <div className="w-[5.563rem] relative text-[1rem] lowercase font-inter text-[#888888] text-left inline-block">
                      2 mins read
                    </div>
                    <div className="w-[6.313rem] relative text-[1rem] capitalize font-inter text-[#888888] text-left inline-block">
                      23 May 2024
                    </div>
                  </div>
                </div>
              </div>

              <div className="  cursor-pointer hover:scale-105 hover:opacity-80 transition-all duration-200">
                <a href={currentBlog?.socialLinks} target="_blank">
                <img
                  className="w-[34px] h-[34px] object-cover "
                  src="https://i.imgur.com/wQnCdVP.png"
                  alt=""
                /></a>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <img
              className="w-full object-cover"
              src={currentBlog?.image}
              alt=""
            />
          </div>

          {/* <div className="video-container">
            <iframe
              width="560"
              height="315"
              src={currentBlog?.YtLinks || ''}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div> */}

          <div>
            <div className="w-full mb-[64px] relative text-[1.375rem] lowercase font-times-new-roman text-white text-justify inline-block">
              <p key={paragraphs + currentBlog} className="m-0 capitalize">
                {paragraphs?.map((paragraph, index) => (
                  <React.Fragment key={index}>
                    <p className="m-0">{paragraph}</p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">&nbsp;</p>
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
          <div className="w-[80%] mb-[106px] relative text-[1.375rem] lowercase font-times-new-roman text-justify inline-block text-white">
            <span>{`refences - `}</span>
            <span className="text-[#6978FF]">
              <a target="_blank" href={currentBlog?.supportedLinks}>
                {currentBlog?.supportedLinks}
              </a>
            </span>
          </div>

          <div
            style={{ gridTemplateRows: `365px 362px 314px auto` }}
            className="grid grid-cols-12  gap-y-[32px] gap-x-[60px] w-[100%] mx-auto  "
          >
            {/* 1st row */}
            <div className="col-span-6 relative">
              <BackgroundImageDiv
                classs={"border-[1px] border-solid border-[#3b3b3b]"}
                imageUrl="https://i.imgur.com/QIH7Ngd.png"
              >
                <div className="flex flex-col  items-start justify-end h-full p-3">
                  <div className="w-[80px] relative rounded-[47px] bg-[#FFFFFFA3] box-border h-[1.438rem] text-left text-[1rem] text-black font-inter border-[0.5px] border-solid border-white">
                    <div className="flex items-center justify-center capitalize font-medium">
                      Article
                    </div>
                  </div>

                  <b className="w-[90%] relative pt-3 text-[1.5rem] capitalize inline-block font-inria-serif text-white text-left">
                    Is web 3 future of Internet ?
                  </b>

                  <div className="w-[90%] pt-3 relative text-[1rem] capitalize font-inria-serif text-[#a8a8a8] text-left inline-block">
                    Lorem ipsum dolor sit amet consectetur. Sagittis urna
                    adipiscing convallis pellentesque blandit facilisis.
                  </div>

                  <div className="w-full flex justify-end relative text-[1rem] capitalize font-inria-serif text-white text-left ">
                    23 may 2024
                  </div>
                </div>
              </BackgroundImageDiv>
            </div>

            <div className="col-span-6 relative">
              <BackgroundImageDiv
                classs={"border-[1px] border-solid border-[#3b3b3b]"}
                imageUrl="https://i.imgur.com/QIH7Ngd.png"
              >
                <div className="flex flex-col  items-start justify-end h-full p-3">
                  <div className="w-[80px] relative rounded-[47px] bg-[#FFFFFFA3] box-border h-[1.438rem] text-left text-[1rem] text-black font-inter border-[0.5px] border-solid border-white">
                    <div className="flex items-center justify-center capitalize font-medium">
                      Article
                    </div>
                  </div>

                  <b className="w-[90%] relative pt-3 text-[1.5rem] capitalize inline-block font-inria-serif text-white text-left">
                    Is web 3 future of Internet ?
                  </b>

                  <div className="w-[90%] pt-3 relative text-[1rem] capitalize font-inria-serif text-[#a8a8a8] text-left inline-block">
                    Lorem ipsum dolor sit amet consectetur. Sagittis urna
                    adipiscing convallis pellentesque blandit facilisis.
                  </div>

                  <div className="w-full flex justify-end relative text-[1rem] capitalize font-inria-serif text-white text-left ">
                    23 may 2024
                  </div>
                </div>
              </BackgroundImageDiv>
            </div>

            {/* 2nd row */}
            <div className="col-span-9 relative">
              <BackgroundImageDiv
                classs={"border-[1px] border-solid border-[#3b3b3b]"}
                imageUrl="https://i.imgur.com/yXLzDQ1.png"
              >
                <div className="flex flex-col  items-start justify-end h-full p-3">
                  <div className="w-[80px] relative rounded-[47px] bg-[#FFFFFFA3] box-border h-[1.438rem] text-left text-[1rem] text-black font-inter border-[0.5px] border-solid border-white">
                    <div className="flex items-center justify-center capitalize font-medium">
                      Article
                    </div>
                  </div>

                  <b className="w-[90%] relative pt-3 text-[1.5rem] capitalize inline-block font-inria-serif text-white text-left">
                    Is web 3 future of Internet ?
                  </b>

                  <div className="w-[90%] pt-3 relative text-[1rem] capitalize font-inria-serif text-[#a8a8a8] text-left inline-block">
                    Lorem ipsum dolor sit amet consectetur. Sagittis urna
                    adipiscing convallis pellentesque blandit facilisis.
                  </div>

                  <div className="w-full flex justify-end relative text-[1rem] capitalize font-inria-serif text-white text-left ">
                    23 may 2024
                  </div>
                </div>
              </BackgroundImageDiv>
            </div>
            <div className="col-span-3 relative">
              <BackgroundImageDiv
                classs={"border-[1px] border-solid border-[#3b3b3b]"}
                imageUrl="https://i.imgur.com/B8HPy6z.png"
              >
                <div className="flex flex-col  items-start justify-end h-full p-3">
                  <div className="w-[80px] relative rounded-[47px] bg-[#FFFFFFA3] box-border h-[1.438rem] text-left text-[1rem] text-black font-inter border-[0.5px] border-solid border-white">
                    <div className="flex items-center justify-center capitalize font-medium">
                      Article
                    </div>
                  </div>

                  <b className="w-[90%] relative pt-3 text-[1.5rem] capitalize inline-block font-inria-serif text-white text-left">
                    Is web 3 future of Internet ?
                  </b>

                  <div className="w-[90%] pt-3 relative text-[1rem] capitalize font-inria-serif text-[#a8a8a8] text-left inline-block">
                    Lorem ipsum dolor sit amet consectetur. Sagittis urna
                    adipiscing convallis pellentesque blandit facilisis.
                  </div>

                  <div className="w-full flex justify-end relative text-[1rem] capitalize font-inria-serif text-white text-left ">
                    23 may 2024
                  </div>
                </div>
              </BackgroundImageDiv>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBlog;
