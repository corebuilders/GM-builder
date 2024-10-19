import React, { useState, useEffect, useContext, useRef } from "react";
import PluralitySocialConnect from "plurality-social-connect";
import { Context } from "../context/ContextProvider";
import axios from "axios";
import { NFTStorage, File, Blob } from "nft.storage";
import { abi, contractAddress } from "../utils/GMBUILDERS";
import Loader from "../components/Loader.jsx";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();
  const {
    handleProfileDataReturned,
    // handleGetAllAccounts,
    // handleGetConnectedAccount,
    // handleMessageSignature,
    // handleVerifyMessageSignature,
    // handleGetBalance,
    // handleSendTransaction,
    // handleGetBlockNumber,
    // handleGetTransactionCount,
    // handleReadFromContract,
    // handleWriteToContract,
    // handleErrorMessage,
    profileData,
    setIsConnected,
    isConnected,
    childRef,
    writeBlog,
    allBlogs,
    detailBlog,
    recommendBlog,
  } = useContext(Context);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [tagsArray, setTagsArray] = useState([]);
  const [cid, setCid] = useState("");
  const [refLink, setRefLink] = useState("");
  const [ytLink, setYtLink] = useState("");
  const [image, setImage] = useState(null);
  const [spinner, setSpinner] = useState(false);

  const hiddenButtonWrapperRef = React.useRef(null);
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const NFT_STORAGE_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDRCOWM5Q0UwQmE3NENiRjA4QkJlZjIwNDMzZEUwYjczNzUxNjI4RTgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY5ODUwNDQ1NzM3MywibmFtZSI6IkZ1bmRFVEgifQ.JxTH4iRtScscfmb9mvZqhSqF9MKs2b0JJS2yof7hzF4";

  const handleUpload = async () => {
    if (!image) {
      console.error("No file selected.");
      return;
    }

    console.log("spin activated");

    const formData = new FormData();
    formData.append("file", image);

    console.log("file", formData);

    try {
      const response = await axios.post(
        "https://api.nft.storage/upload",
        formData,
        {
          headers: {
            Authorization: `Bearer ${NFT_STORAGE_TOKEN}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const cid = response.data.value.cid;
      setCid(cid);

      console.log("NFT Storage response:", cid);
      return cid;
    } catch (error) {
      console.error("Error uploading to NFT Storage:", error);
    }
  };

  // web3 functions
  // const handleProfileDataReturned = (data ) => {
  //   const receivedData = JSON.parse(JSON.stringify(data))
  //   console.log("Get profile data:", receivedData);
  //   // alert(JSON.stringify(data));
  //   childRef.current.closeSocialConnectPopup();
  // };

  // Web3 function handles
  const handleGetAllAccounts = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Get all accounts:", receivedData);
    // alert(JSON.stringify(data));
  };
  const handleGetConnectedAccount = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Get connected account:", receivedData);
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
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Read from contract:", receivedData);
    // alert(JSON.stringify(data));
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

  const handleVisibleButtonClick = () => {
    if (hiddenButtonWrapperRef.current) {
      const hiddenButton =
        hiddenButtonWrapperRef.current.querySelector("button");
      if (hiddenButton) {
        hiddenButton.click();
      }
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleUpload1 = async () => {
    setSpinner(true);
    if (!image) {
      alert("Please select a file first!");
      return;
    }

    try {
      const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });
      const imageFile = await handleUpload();

      const metadata = new Blob(
        [
          JSON.stringify({
            name: title,
            content: content,
            author: profileData.displayName,
            tag: tagsArray,

            image: `https://${imageFile}.ipfs.nftstorage.link/${image.name}`,
            // URL: imageFile,
            date: new Date().toLocaleString("en-IN", {
              hour12: false,
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            }),
            supportedLinks: refLink,
            socialLinks: `https://x.com/${profileData.name}`,
            YtLinks: ytLink,
          }),
        ],
        { type: "application/json" }
      );
      console.log(metadata);
      const nftFile = new File([metadata], "metadata.json", {
        type: "application/json",
      });

      const cids = await client.storeBlob(nftFile);
      setCid(`https://${cids}.ipfs.nftstorage.link/`);
      console.log(`https://${cids}.ipfs.nftstorage.link/`);
      await writeBlog(
        `https://${cids}.ipfs.nftstorage.link/`,
        tagsArray,
        setSpinner
      );
      // alert('File uploaded successfully! CID: ' + cid);
      navigate("/");
    } catch (error) {
      setSpinner(false);

      console.error("Upload failed:", error);
      // alert('Upload failed!');
    }
  };

  async function callWriteAddBlog() {
    PluralitySocialConnect.writeToContract(contractAddress, abi, "createBlog", [
      `https://${cid}.ipfs.nftstorage.link/`,
      tags,
    ]);
  }

  useEffect(() => {
    const tagsList = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag);
    console.log(tagsList);
    setTagsArray(tagsList);
  }, [tags]);

  useEffect(() => {
    async function readUserExist() {
      //  console.log("aagaya" ,isUserExist)

      if (cid) {
        //  console.log("bhai write ho raha",`${profileData.displayName},${profileData.name},${datas.assetData},${profileData.profileUrl}`)
        await PluralitySocialConnect.writeToContract(
          contractAddress,
          abi,
          "createBlog",
          [cid, tags]
        );
      }
    }

    readUserExist();
  }, []);

  return (
    <div className="bg-black pb-12 relative">
      {/* loader */}
      <div
        className={` top-0 left-0 w-full h-full z-40 backdrop-filter backdrop-blur-sm ${
          spinner ? "fixed" : "hidden"
        } `}
      >
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center min-h-[70vh] ">
          <Loader run={spinner} />
        </div>
      </div>
      {/* loader  end */}

      {/* Navbar */}
      <div className="flex justify-between items-center bg-black p-[18px]">
        <div className="w-[128px] h-[103px] object-cover">
          <img src="https://i.imgur.com/VSXWSCv.png" alt="Logo" />
        </div>

        {/* Wallet */}
        <div>
          <div className="w-[186px]">
            {/* Hidden button */}
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
            {/* Showing button */}
            <div
              onClick={handleVisibleButtonClick}
              className="rounded-lg cursor-pointer w-full flex items-center justify-evenly relative box-border h-[3.25rem] overflow-hidden text-left text-[1.125rem] text-white font-inter border-[0.5px] border-solid border-[#FFFFFF4D]"
            >
              <img
                className={`flex items-center justify-center object-cover ${
                  isConnected
                    ? "rounded-full w-[2rem]"
                    : "w-[1.188rem] h-[1.875rem]"
                }`}
                alt="Profile"
                src={
                  isConnected
                    ? profileData.profileUrl
                    : "https://i.imgur.com/85UVZQv.png"
                }
              />
              <div className="flex items-center justify-center uppercase font-light">
                {isConnected ? profileData.name : "Connect"}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar */}

      {/* Main */}
      <div className="w-[80%] pt-7 pl-[77px] pb-10 pr-[49px] mx-auto flex flex-col items-start justify-start relative rounded-[20px] bg-[#111] box-border overflow-hidden text-left text-[1.375rem] text-[#7a7a7a] font-inria-serif border-[1px] border-solid border-[#282828]">
        {/* AI */}
        <div className="cursor-pointer w-full relative flex items-center justify-end">
          <a href="https://bafybeifo52cu534pqny7zkxuy5qz6k53dyaryfzjj4nzujpsanrvkhjpge.ipfs.nftstorage.link/metadata.json">
            <div className="w-[121px] relative rounded-[5px] box-border h-[2.813rem] overflow-hidden text-center text-[1rem] text-white font-inria-serif border-[1px] border-solid border-[#545454]">
              <div className="flex items-center justify-center w-full h-full capitalize">
                AI assistant
              </div>
            </div>
          </a>
        </div>
        <div className="pb-9">
          <input
            type="text"
            placeholder="Add title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-[35.063rem] placeholder:bg-transparent bg-transparent relative text-[2.188rem]  inline-block font-inria-serif text-white placeholder:text-[#7A7A7A] p-1 text-left"
          />
        </div>

        <div className="flex gap-20 w-full">
          <img
            src="https://i.imgur.com/Pp7qZ4p.png"
            alt="Upload"
            className="cursor-pointer w-[300px] object-contain"
            onClick={handleImageClick}
          />
          <img
            src={selectedImage || ""}
            alt="Selected"
            className={`cursor-pointer w-[300px] object-cover ${
              selectedImage ? "" : "hidden"
            }`}
            onClick={handleImageClick}
          />
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        <div className="py-9">
          <input
            type="text"
            placeholder="Start Writing"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-[35.063rem] h-[160px] placeholder:bg-transparent bg-transparent relative text-[1.5rem]  inline-block font-inria-serif text-white placeholder:text-[#7A7A7A] p-1 text-left"
          />
        </div>

        <div className="py-9">
          <input
            type="text"
            placeholder="Tags (*separate by comma)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-[25.063rem] px-5 h-[100px] placeholder:bg-transparent bg-transparent relative text-[1.5rem]  inline-block font-inria-serif rounded-[5px] bg-[#2B2B2B] text-white placeholder:text-[#b0b0b0] p-1 text-left"
          />
        </div>
        <div className="py-9">
          <input
            type="text"
            placeholder="Reference Links"
            value={refLink}
            onChange={(e) => setRefLink(e.target.value)}
            className="w-[25.063rem] px-5 h-[100px] placeholder:bg-transparent bg-transparent relative text-[1.5rem]  inline-block font-inria-serif rounded-[5px] bg-[#2B2B2B] text-white placeholder:text-[#b0b0b0] p-1 text-left"
          />
        </div>

        <div className="py-9">
          <input
            type="text"
            placeholder="Youtube Link"
            value={ytLink}
            onChange={(e) => setYtLink(e.target.value)}
            className="w-[25.063rem] px-5 h-[100px] placeholder:bg-transparent bg-transparent relative text-[1.5rem]  inline-block font-inria-serif rounded-[5px] bg-[#2B2B2B] text-white placeholder:text-[#b0b0b0] p-1 text-left"
          />
        </div>

        <div
          onClick={handleUpload1}
          className="flex cursor-pointer items-center justify-end w-full"
        >
          <div className="w-[166px] relative rounded-[5px] bg-white box-border h-[2.813rem] overflow-hidden text-left text-[1.375rem] text-black font-inria-serif border-[1px] border-solid border-white">
            <div className="flex items-center h-full justify-center capitalize">
              Publish
            </div>
          </div>
        </div>
      </div>
      {/* Main */}
      <div>{tagsArray}</div>
    </div>
  );
};

export default AddBlog;
