const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

const mnemonic = process.env.REACT_APP_MNEMONIC;
const url = process.env.REACT_APP_RPC_URL;
module.exports = {
  networks: {
   
    rinkeby: {
      network_id: 4,
      provider: () => {
        return new HDWalletProvider(mnemonic, url);
      },
       gas: 5000000,
        gasPrice: 45000000000,
        confirmations: 2,
        timeoutBlocks: 200,
        skipDryRun: false,
        websocket: true,
        timeoutBlocks: 50000,
        networkCheckTimeout: 1000000
    },
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    // truffle migrate --reset --compile-all
    solc: {
      version: "0.8.0",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
