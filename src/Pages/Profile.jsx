import React, { useState, useContext } from "react";
// import Navbar from "../components/Navbar";
import BackgroundImageDiv from "../components/BGImageDiv";
import { Context } from "../context/ContextProvider";
import { abi, contractAddress } from "../utils/GMBUILDERS";

import PluralitySocialConnect from "plurality-social-connect";
import axios from "axios";

const Profile = () => {
  const { childRef, profileData, isConnected, setIsConnected,walletAddress } =
    useContext(Context);
  const [activeButton, setActiveButton] = React.useState("Recommended For You");
  const hiddenButtonWrapperRef = React.useRef(null);

  // web3 functions
  const handleProfileDataReturned = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Get profile data:", receivedData);
    alert(JSON.stringify(data));
    childRef.current.closeSocialConnectPopup();
  };

  // Web3 function handles
  const handleGetAllAccounts = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Get all accounts:", receivedData);
    alert(JSON.stringify(data));
  };
  const handleGetConnectedAccount = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Get connected account:", receivedData);
    alert(JSON.stringify(data));
  };
  const handleMessageSignature = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Get message signature:", receivedData);
    alert(JSON.stringify(data));
  };
  const handleVerifyMessageSignature = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Verify message signature:", receivedData);
    alert(JSON.stringify(data));
  };
  const handleGetBalance = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Get balance:", receivedData);
    alert(JSON.stringify(data));
  };
  const handleSendTransaction = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Send transaction:", receivedData);
    alert(JSON.stringify(data));
  };
  const handleGetBlockNumber = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Get block number:", receivedData);
    alert(JSON.stringify(data));
  };
  const handleGetTransactionCount = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Get transaction count:", receivedData);
    alert(JSON.stringify(data));
  };
  const handleReadFromContract = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Read from contract:", receivedData);
    alert(JSON.stringify(data));
  };
  const handleWriteToContract = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Write to contract:", receivedData);
    alert(JSON.stringify(data));
  };
  const handleErrorMessage = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Get error message:", receivedData);
    alert(JSON.stringify(data));
  };

  // Function to handle the click on the visible button
  const handleVisibleButtonClick = () => {
    if (hiddenButtonWrapperRef.current) {
      const hiddenButton =
        hiddenButtonWrapperRef.current.querySelector("button");
      if (hiddenButton) {
        hiddenButton.click();
      }
    }
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const [userData, setUserData] = React.useState(null)
React.useEffect(() => {
  

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://api.studio.thegraph.com/query/75757/gmbuildersv1/version/latest",
        {
          query: `
          {
            userUpdateds(where: {userAddress: "${walletAddress}"}) {
              interest
              name
              profileUrl
              userAddress
              username
            }
          }
          `,
        }
      );
      console.log("gotti" ,response.data.data.userUpdateds[0])
      setUserData(response.data.data.userUpdateds[0]);

      PluralitySocialConnect.writeToContract(contractAddress,abi, "getUserProfile", [walletAddress])
    } catch (error) {
      // setError(error);
    } finally {
      // setLoading(false);
    }
  };

  fetchData();
}, [])

  return (
    <div className="bg-black ">
      <div className="mb-[54px]">
        {/* navbar */}
        <div>
          <div className=" bg-black flex px-11 items-center justify-between p-[1.125rem] min-h-[120px] w-full overflow-hidden">
            <div className="relative left-0 bottom-2">
              <img
                src="https://i.imgur.com/T0Ew5Bq.png"
                className=" object-cover h-[103px]"
                alt=""
              />
            </div>

            <div className="">
              <ul className="flex items-center outline-none relative top-4 gap-[34px] min-h-[120px] min-w-[400px] justify-between space-x-6">
                <li>
                  <a
                    href="#"
                    className="text-[1.125rem] capitalize font-medium font-inter text-white text-left inline-block"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[1.125rem] capitalize font-medium font-inter text-white text-left inline-block"
                  >
                    Article
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[1.125rem] capitalize font-medium font-inter text-white text-left inline-block"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[1.125rem] capitalize font-medium font-inter text-white text-left inline-block"
                  >
                    Communities
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[1.125rem] capitalize font-medium font-inter text-white text-left inline-block"
                  >
                    Write
                  </a>
                </li>
              </ul>
            </div>

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
        {/* navbar */}
      </div>
      <div className="w-[90%] mx-auto relative rounded-[14px] bg-[#1a1a1a] pt-[31px] pl-[34px] pb-1 pr-4 grid grid-cols-12  overflow-hidden text-left text-[1rem] text-white font-inter ">
        <div className=" col-span-7">
          <div className="w-[100%] grid grid-cols-12 gap-6 ">
            <div className="col-span-5">
              <img
                src={
                  isConnected
                    ? (userData && userData.profileUrl ? userData.profileUrl : 'https://i.imgur.com/85UVZQv.png')
                    : 'https://i.imgur.com/85UVZQv.png'
                }
                className=" w-full object-contain "
                alt=""
              />
            </div>
            <div className="col-span-7 flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <b className="w-[10.75rem] relative text-[1.625rem] inline-block font-inter text-white text-left">
                  {userData?.name ?? ''}

                  </b>
                  <div className="w-[10.125rem] relative text-[1.25rem] font-inter text-[#757575] text-left inline-block">
                  {userData?.username ?? ''}
                  </div>
                </div>
                <div className="w-[125px] relative rounded-[40px] bg-gray box-border h-[2.563rem] overflow-hidden text-left text-[1rem] text-white font-inter border-[1px] border-solid border-darkslategray">
                  <div className="flex h-full items-center justify-center font-medium">
                    Edit Profile
                  </div>
                </div>
              </div>
              <div className="w-[5.75rem] relative text-[1.125rem] font-inter text-white text-left inline-block">{` Developer `}</div>
              <div className="w-[7.375rem] relative text-[1.125rem] font-inter text-white text-left inline-block">
                I like blogging
              </div>

              <div className="flex gap-[6px] items-center justify-start">
                <img src="https://i.imgur.com/3b6hK3V.png" alt="" />
                <div className="w-[12.875rem] relative text-[1.125rem] font-inter text-[#757575] text-left inline-block">
                  Joined September 2023
                </div>
              </div>

              <div className="flex gap-[6px] items-center justify-start">
                <div className="w-[2.063rem] relative text-[1.125rem] font-inter text-white text-left inline-block">
                  700
                </div>
                <div className="w-[9.063rem] relative text-[1.125rem] font-inter text-[#8C8C8C] text-left inline-block">
                  Reputation score
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <div className="w-full h-full flex justify-end">
            <div className="w-[270px] flex flex-col items-center p-4 justify-normal relative rounded-2xl [background:linear-gradient(180.13deg,_#202020,_#000)] box-border h-[15.95rem] overflow-hidden text-left text-[1rem] text-[#777] font-inter border-t-[2px] border-solid border-[#282828] border-r-[1px] border-l-[1px]">
              <div className="w-[7.125rem] relative text-[1rem] capitalize font-medium font-inter mb-[22px] text-[#777777] text-left inline-block">
                Your GM Coins
              </div>
              <img
                className=" mb-[32px] w-[95px] object-contain"
                src="https://i.imgur.com/g7sG0sW.png"
                alt=""
              />
              <div className="w-[104px] relative rounded-md [background:linear-gradient(106.75deg,_#fdd835,_#fff_49.15%,_#ffd000)] h-[1.938rem] overflow-hidden text-left text-[0.875rem] text-black font-inter">
                <div className="h-full flex items-center justify-center font-medium">
                  10 coins
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* user's article */}
      {/* toggle button */}
      <div className="flex  mt-[80px] transition-all duration-150 w-[1140px]  min-h-[22px] text-[1.125rem] capitalize font-medium font-inter text-white text-left gap-x-12 items-center justify-start px-[100px]">
        <button
          className={`focus:outline-none transition-all duration-200  ${
            activeButton === "Recommended For You" ? "" : " "
          }`}
          onClick={() => handleButtonClick("Recommended For You")}
        >
          Your Article
          <div
            className={` relative box-border top-[6px] transition-all mx-auto duration-200 h-[0.031rem] border-t-[1px] border-solid border-white border-b-1 ${
              activeButton === "Recommended For You"
                ? " w-full border-white"
                : "w-0 "
            }`}
          />
        </button>
        <button
          className={`focus:outline-none transition-all relative duration-200  ${
            activeButton === "Trending" ? "" : " "
          }`}
          onClick={() => handleButtonClick("Trending")}
        >
          Saved Article
          <div
            className={` relative box-border top-[6px] transition-all mx-auto duration-200 h-[0.031rem] border-t-[1px] border-solid border-white border-b-1 ${
              activeButton === "Trending" ? " w-full border-white" : "w-0 "
            }`}
          />
        </button>
      </div>
      <div
        style={{ gridTemplateRows: `360px auto` }}
        className="grid py-0 w-[90%]  mx-auto grid-cols-12 pt-[63px] gap-[45px]"
      >
        {/* 1st col */}
        <div className="col-span-7 relative">
          <BackgroundImageDiv
            classs={""}
            imageUrl="https://i.imgur.com/p1CFttI.png"
          >
            <div className="flex absolute w-full flex-col gap-7 items-end justify-center p-4 h-min">
              <div className="w-[98px] relative rounded-2xl bg-[#FFFFFFBD] box-border h-[1.625rem] overflow-hidden text-left text-[0.875rem] text-[#2D2D2D] font-inter border-[0.5px] border-solid border-white">
                <div className="flex items-center justify-center capitalize font-semibold">
                  30 views
                </div>
              </div>
              <div className="w-[98px] flex  items-center justify-center relative rounded-2xl bg-[#FFFFFFBD] box-border h-[1.625rem] overflow-hidden text-left text-[0.875rem] text-[#2D2D2D] font-inter border-[0.5px] border-solid border-white">
                <div className="flex items-center justify-center capitalize font-semibold">
                  Copy
                </div>
                <img
                  className=" w-[24px] object-cover "
                  src="https://i.imgur.com/CqSp4u9.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col  items-start justify-end h-full p-3">
              <div className="w-[80px] relative rounded-[47px] bg-[#FFFFFF00] box-border h-[1.438rem] text-left text-[1rem] text-white font-inter border-[0.5px] border-solid border-white">
                <div className="flex items-center justify-center capitalize font-medium">
                  Article
                </div>
              </div>

              <b className="w-[97%] pt-3 relative text-[1.5rem] capitalize inline-block font-inria-serif text-white text-left">
                U.S. Credit Unions Adopt Tokenization of Real World Assets
              </b>

              <div className="w-[85%] pt-3 relative text-[1rem] capitalize font-inria-serif text-white text-left inline-block">
                Lorem ipsum dolor sit amet consectetur. Sagittis urna adipiscing
                convallis pellentesque blandit facilisis.
              </div>

              <div className="w-full pt-3 flex justify-end relative text-[1rem] capitalize font-inria-serif text-white text-left ">
                23 may 2024
              </div>
            </div>
          </BackgroundImageDiv>
        </div>
        {/* 2nd col */}
        <div className="col-span-5 relative">
          <BackgroundImageDiv
            classs={""}
            imageUrl="https://i.imgur.com/cmKslBj.png"
          >
            <div className="flex absolute w-full flex-col gap-7 items-end justify-center p-4 h-min">
              <div className="w-[98px] relative rounded-2xl bg-[#FFFFFFBD] box-border h-[1.625rem] overflow-hidden text-left text-[0.875rem] text-[#2D2D2D] font-inter border-[0.5px] border-solid border-white">
                <div className="flex items-center justify-center capitalize font-semibold">
                  30 views
                </div>
              </div>
              <div className="w-[98px] flex  items-center justify-center relative rounded-2xl bg-[#FFFFFFBD] box-border h-[1.625rem] overflow-hidden text-left text-[0.875rem] text-[#2D2D2D] font-inter border-[0.5px] border-solid border-white">
                <div className="flex items-center justify-center capitalize font-semibold">
                  Copy
                </div>
                <img
                  className=" w-[24px] object-cover "
                  src="https://i.imgur.com/CqSp4u9.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col  items-start justify-end h-full p-3">
              <div className="w-[80px] relative rounded-[47px] bg-[#FFFFFF00] box-border h-[1.438rem] text-left text-[1rem] text-white font-inter border-[0.5px] border-solid border-white">
                <div className="flex items-center justify-center capitalize font-medium">
                  Article
                </div>
              </div>

              <b className="w-[97%] pt-3 relative text-[1.5rem] capitalize inline-block font-inria-serif text-white text-left">
                U.S. Credit Unions Adopt Tokenization of Real World Assets
              </b>

              <div className="w-[85%] pt-3 relative text-[1rem] capitalize font-inria-serif text-white text-left inline-block">
                Lorem ipsum dolor sit amet consectetur. Sagittis urna adipiscing
                convallis pellentesque blandit facilisis.
              </div>

              <div className="w-full pt-3 flex justify-end relative text-[1rem] capitalize font-inria-serif text-white text-left ">
                23 may 2024
              </div>
            </div>
          </BackgroundImageDiv>
        </div>
      </div>
    </div>
  );
};

export default Profile;
