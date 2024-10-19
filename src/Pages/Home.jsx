import React, { useState, useContext } from "react";
// import Navbar from "../components/Navbar";
import Home_comp1 from "../components/Home_comp1";
import Home_comp2 from "../components/Home_comp2";
import Home_comp3 from "../components/Home_comp3";
import Home_comp4 from "../components/Home_comp4";
import Home_comp5 from "../components/Home_comp5";
import Home_comp6 from "../components/Home_comp6";
import Footer from "../components/Footer";
// import React from "react";
import PluralitySocialConnect from "plurality-social-connect";
import { Context } from "../context/ContextProvider";
import { abi, contractAddress } from "../utils/GMBUILDERS";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const {
    childRef,
    profileData,
    setProfileData,
    setDatas,
    setWalletAddress,
    walletAddress,
    isUserExist,
    setIsUserExist,
    datas,
    setIsConnected,
    isConnected,
  } = useContext(Context);
  const hiddenButtonWrapperRef = React.useRef(null);

  const handleProfileDataReturned = (data) => {
    try {
      const receivedData = data.data; // Access the data array correctly
      console.log("dapp receives:", receivedData);

      if (receivedData && receivedData.length > 0) {
        // Ensure there is at least one element in the array
        const firstProfileData = receivedData[0]["profileData"];

        if (firstProfileData) {
          const _profileData = JSON.parse(firstProfileData); // Parse the profileData string
          setDatas(receivedData[0]); // Update the state with the first item in the data array
          setProfileData(_profileData); // Update the state with the parsed profileData
        } else {
          console.error("Profile data is undefined");
        }
      } else {
        console.error("Received data is empty or undefined");
      }
    } catch (error) {
      console.error("Error processing profile data:", error);
    }

    if (childRef.current) {
      childRef.current.closeSocialConnectPopup(); // Ensure the childRef is defined before accessing
    }
  };

  // Web3 function handles
  const handleGetAllAccounts = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Get all accounts:", receivedData);
    // alert(JSON.stringify(data));
  };
  const handleGetConnectedAccount = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Get connected account:", receivedData.data.address);
    setWalletAddress(receivedData.data.address);
    // alert(JSON.stringify(data));
  };
  const handleMessageSignature = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Get message signature:", receivedData);
    // alert(JSON.stringify(data));
  };
  const handleVerifyMessageSignature = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Verify message signature:", receivedData);
    // alert(JSON.stringify(data));
  };
  const handleGetBalance = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Get balance:", receivedData);
    // alert(JSON.stringify(data));
  };
  const handleSendTransaction = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Send transaction:", receivedData);
    // alert(JSON.stringify(data));
  };
  const handleGetBlockNumber = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Get block number:", receivedData);
    // alert(JSON.stringify(data));
  };
  const handleGetTransactionCount = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Get transaction count:", receivedData);
    // alert(JSON.stringify(data));
  };
  const handleReadFromContract = (data) => {
    console.log(data);
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Read from contract:", receivedData);
    // setIsUserExist(receivedData.data)
    alert(JSON.stringify(data));
    // return receivedData;
  };
  const handleWriteToContract = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Write to contract:", receivedData);
    // alert(JSON.stringify(data));
  };
  const handleErrorMessage = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Get error message:", receivedData);
    // alert(JSON.stringify(data));
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

  React.useEffect(() => {
    async function readUserExist() {
      await PluralitySocialConnect.getConnectedAccount();
      //  await PluralitySocialConnect.readFromContract(contractAddress,abi,"getUserProfile",[walletAddress])
      // await PluralitySocialConnect.readFromContract(
      //   contractAddress,
      //   abi,
      //   "isUserExist"
      // );
    }
    readUserExist();
  }, [profileData, walletAddress]);

  React.useEffect(() => {
    async function readUserExist() {
      //  console.log("aagaya" ,isUserExist)

      if (!isUserExist) {
        if (profileData && datas) {
          //  console.log("bhai write ho raha",`${profileData.displayName},${profileData.name},${datas.assetData},${profileData.profileUrl}`)
          await PluralitySocialConnect.writeToContract(
            contractAddress,
            abi,
            "setUser",
            [
              profileData.displayName,
              profileData.name,
              datas.assetData,
              profileData.profileUrl,
            ]
          );
        }
      }
    }
    readUserExist();
  }, [isUserExist, datas, profileData]);

  return (
    <>
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
              <li
                onClick={() => {
                  navigate("/blog");
                }}
              >
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
              <li
                onClick={() => {
                  navigate("/addblog");
                }}
              >
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
                onProfileDataReturned={(d) => {
                  handleProfileDataReturned(d);
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
                onReadFromContract={(d) => {
                  console.log("bhaiya", d);
                  handleReadFromContract(d);
                }}
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
              onClick={()=>{
                if (isConnected) {
                  navigate('/profile')
                }
                else{
                  handleVisibleButtonClick()
                }
                }}
              className="rounded-lg cursor-pointer hover:scale-110 transition-all duration-150 w-full flex items-center justify-evenly relative box-border h-[3.25rem] overflow-hidden text-left text-[1.125rem] text-white font-inter border-[0.5px] border-solid border-[#FFFFFF4D]"
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
      <div>
        <Home_comp1 />
      </div>
      <div className="">
        <Home_comp2 />
      </div>
      <div>
        <Home_comp3 />
      </div>
      <div>
        <Home_comp4 />
      </div>
      <div className="bg-black pb-[233px]">
        <Home_comp5 />
      </div>
      <div className="bg-black pb-[233px]">
        <Home_comp6 />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
