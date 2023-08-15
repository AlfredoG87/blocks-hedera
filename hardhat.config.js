require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.4.24",
  defaultNetwork: 'local',
  networks: {
    local: {
      url: 'http://localhost:7546',
      accounts: ["0x105d050185ccb907fba04dd92d8de9e32c18305e097ab41dadda21489a211524", "0x2e1d968b041d84dd120a5860cee60cd83f9374ef527ca86996317ada3d0d03e7"],
      chainId: 298,
      blockGasLimit: 500000,
    },
    testnet: {
      url: 'https://testnet.hashio.io/api',
      accounts: [],
      chainId: 296,
    },
  },
};
