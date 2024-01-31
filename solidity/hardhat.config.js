// //https://eth-mainnet.g.alchemy.com/v2/BlLIMpqORo4lJ_n7n0PNSAEwj8G9Zfcw

// require("@nomiclabs/hardhat-waffle");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.9",
//   networks: {
//     goerli: {
//       url: "https://eth-mainnet.g.alchemy.com/v2/BlLIMpqORo4lJ_n7n0PNSAEwj8G9Zfcw",
//     accounts: ['527ef307b30382f98e68edd3a163b770885638eabf8c59d3f187dfeb4ddef1a0']

//   },
//   },
// };



require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://eth-mainnet.g.alchemy.com/v2/BlLIMpqORo4lJ_n7n0PNSAEwj8G9Zfcw",
      accounts: ['527ef307b30382f98e68edd3a163b770885638eabf8c59d3f187dfeb4ddef1a0'],
    },
  },
};
