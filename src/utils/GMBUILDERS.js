import abis from './GMBUILDERS.json'

export const contractABI = abis;
export const contractAddress = "0x6D51e975A51BB782D42AD8455Fd2518B9bD1312b";

export const abi  = `[
    {
      "inputs": [],
      "name": "acceptOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_postId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "addPost",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "EmptyArgs",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "EmptySource",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "requestId",
          "type": "bytes32"
        },
        {
          "internalType": "bytes",
          "name": "response",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "err",
          "type": "bytes"
        }
      ],
      "name": "handleOracleFulfillment",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "NoInlineSecrets",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OnlyRouterCanFulfill",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "requestId",
          "type": "bytes32"
        }
      ],
      "name": "UnexpectedRequestID",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "blogId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "blogLink",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string[]",
          "name": "categories",
          "type": "string[]"
        }
      ],
      "name": "BlogCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "blogId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "tipper",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "BlogTipped",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "views",
          "type": "uint256"
        }
      ],
      "name": "BlogViewed",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_blogLink",
          "type": "string"
        },
        {
          "internalType": "string[]",
          "name": "_categories",
          "type": "string[]"
        }
      ],
      "name": "createBlog",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_blogLink",
          "type": "string"
        },
        {
          "internalType": "string[]",
          "name": "_categories",
          "type": "string[]"
        }
      ],
      "name": "createNews",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "blogId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "tipper",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "NewsTipped",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "views",
          "type": "uint256"
        }
      ],
      "name": "NewsViewed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferRequested",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        }
      ],
      "name": "RequestFulfilled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        }
      ],
      "name": "RequestSent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "requestId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "character",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "response",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "err",
          "type": "bytes"
        }
      ],
      "name": "Response",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "username",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string[]",
          "name": "interest",
          "type": "string[]"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "profileUrl",
          "type": "string"
        }
      ],
      "name": "UserUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "blogId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "blogLink",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string[]",
          "name": "categories",
          "type": "string[]"
        }
      ],
      "name": "newsCreated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "subscriptionId",
          "type": "uint64"
        },
        {
          "internalType": "string[]",
          "name": "args",
          "type": "string[]"
        }
      ],
      "name": "sendRequest",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "requestId",
          "type": "bytes32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_username",
          "type": "string"
        },
        {
          "internalType": "string[]",
          "name": "_interest",
          "type": "string[]"
        },
        {
          "internalType": "string",
          "name": "_profileUrl",
          "type": "string"
        }
      ],
      "name": "setUser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_blogId",
          "type": "uint256"
        }
      ],
      "name": "tipBlogOwner",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_blogId",
          "type": "uint256"
        }
      ],
      "name": "tipNews",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "updateViewsBlog",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "updateViewsNews",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "character",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllBlogs",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "blogLink",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "likes",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "views",
              "type": "uint256"
            },
            {
              "internalType": "string[]",
              "name": "categories",
              "type": "string[]"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "totalTippedAmount",
              "type": "uint256"
            }
          ],
          "internalType": "struct Gmbuilders.Blog[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllNews",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "blogLink",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "likes",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "views",
              "type": "uint256"
            },
            {
              "internalType": "string[]",
              "name": "categories",
              "type": "string[]"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "totalTippedAmount",
              "type": "uint256"
            }
          ],
          "internalType": "struct Gmbuilders.Blog[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "getBlog",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "blogLink",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "likes",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "views",
              "type": "uint256"
            },
            {
              "internalType": "string[]",
              "name": "categories",
              "type": "string[]"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "totalTippedAmount",
              "type": "uint256"
            }
          ],
          "internalType": "struct Gmbuilders.Blog",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCryptoPrices",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "getNews",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "blogLink",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "likes",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "views",
              "type": "uint256"
            },
            {
              "internalType": "string[]",
              "name": "categories",
              "type": "string[]"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "totalTippedAmount",
              "type": "uint256"
            }
          ],
          "internalType": "struct Gmbuilders.Blog",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        }
      ],
      "name": "getUserProfile",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "username",
              "type": "string"
            },
            {
              "internalType": "string[]",
              "name": "interest",
              "type": "string[]"
            },
            {
              "internalType": "string",
              "name": "profileUrl",
              "type": "string"
            },
            {
              "internalType": "uint256[]",
              "name": "posts",
              "type": "uint256[]"
            },
            {
              "internalType": "uint256",
              "name": "coin",
              "type": "uint256"
            }
          ],
          "internalType": "struct Gmbuilders.User",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isUserExist",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "s_lastError",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "s_lastRequestId",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "s_lastResponse",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]`
