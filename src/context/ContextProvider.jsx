import React, { useEffect, useState } from "react";
import { ethers, utils } from "ethers";
import { contractABI, contractAddress } from "../utils/GMBUILDERS";
import axios from "axios";

export const Context = React.createContext();

// eslint-disable-next-line react/prop-types
export const BlogProvider = ({ children }) => {
  const childRef = React.useRef(null);
  const [datas, setDatas] = React.useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [profileData, setProfileData] = useState(null);
  const [isUserExist, setIsUserExist] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [allBlogs, setAllBlogs] = useState(null);
  const [detailBlog, setDetailBlog] = useState(null);
  const [recommendBlog, setRecommendBlog] = useState(null);

  const isUserEXIST = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        // Request account access if needed
        await window.ethereum.request({ method: "eth_requestAccounts" });

        // Connect to the Ethereum network
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        // Log the connected account address
        const account = await signer.getAddress();
        console.log("Account address:", account);

        // Instantiate the contract
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        // Call the isUserExist function
        const userExists = await contract.isUserExist();
        console.log("User exists:", userExists);
        setIsUserExist(userExists);
      } catch (error) {
        console.error("Error reading from contract:", error);
      }
    } else {
      console.log("MetaMask is not installed");
    }
  };

  const getAllBLOGS = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        // Request account access if needed
        await window.ethereum.request({ method: "eth_requestAccounts" });

        // Connect to the Ethereum network
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        // Log the connected account address
        const account = await signer.getAddress();
        console.log("Account address:", account);

        // Instantiate the contract
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        // Call the isUserExist function
        const userExists = await contract.getAllBlogs();
        console.log("All Blogs", userExists);
        setAllBlogs(userExists);
      } catch (error) {
        console.error("Error reading from contract:", error);
      }
    } else {
      console.log("MetaMask is not installed");
    }
  };

  const writeBlog = async (link, arr, setSpinner) => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const account = await signer.getAddress();
        console.log("Account address:", account);

        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        const userExists = await contract.createBlog(link, arr);
        userExists.wait();
        console.log("User exists:", userExists);
        // setIsUserExist(userExists)
        setSpinner(false);
      } catch (error) {
        setSpinner(false);

        console.error("Error reading from contract:", error);
      }
    } else {
      console.log("MetaMask is not installed");
    }
  };
  useEffect(() => {
    isUserEXIST();
    getAllBLOGS();
  }, [datas]);

  const fetchDataFromIPFS = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  };

  const processArray = async (array) => {
    const resultArray = {};

    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      const ipfsLink = element[0];

      try {
        const data = await fetchDataFromIPFS(ipfsLink);
        resultArray[i] = data;
      } catch (error) {
        console.error(`Error fetching data for index ${i}:`, error);
      }
    }

    return resultArray;
  };
  const processArray1 = async (array) => {
    const resultArray = {};

    for (let i = 0; i < array.length; i++) {
      const ipfsLink = array[i];

      try {
        const data = await fetchDataFromIPFS(ipfsLink);
        resultArray[i] = data;
      } catch (error) {
        console.error(`Error fetching data for index ${i}:`, error);
      }
    }

    return resultArray;
  };

  useEffect(() => {
    async function a() {
      await processArray(allBlogs).then((result) => {
        console.log(result);
        setDetailBlog(result);
      });
    }
    a();
  }, [allBlogs]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("trying recommended fetch")
      try {
        const response = await axios.post(
          "https://blogbot.onrender.com/recomm",
          {
            intrests: ["blockchain", "AI", "stock"],
          }
        );
        console.log(response.data);
        await processArray1(response.data).then((result) => {
          console.log("recommendedBlog", result);
          setRecommendBlog(result);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [profileData]);

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

  const renderData = (data) => {
    if (typeof data === "object" && data !== null) {
      return <pre>{JSON.stringify(data, null, 2)}</pre>;
    } else {
      return <div>{data}</div>;
    }
  };
  return (
    <Context.Provider
      value={{
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
        renderData,
        setDatas,
        setProfileData,
        setWalletAddress,
        setIsUserExist,
        setIsConnected,
        writeBlog,
        childRef,
        walletAddress,
        datas,
        profileData,
        isUserExist,
        isConnected,
        allBlogs,
        recommendBlog,
        detailBlog,
      }}
    >
      {children}
    </Context.Provider>
  );
};
