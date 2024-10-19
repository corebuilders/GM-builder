import React, { useState, useContext } from "react";
import PluralitySocialConnect from "plurality-social-connect";
import { Context } from "../context/ContextProvider";

const Navbar = () => {
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
  } = useContext(Context);

  const [isConnected, setIsConnected] = useState(false);

  const hiddenButtonWrapperRef = React.useRef(null);

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
  return (
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
  );
};

export default Navbar;
