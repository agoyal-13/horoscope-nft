require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { PRIVATE_KEY } = process.env;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/MBFEjjNuC-1JZtjk6Qe2Xz7Fg8EYL2Ua",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
