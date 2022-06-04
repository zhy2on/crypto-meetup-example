require('@nomiclabs/hardhat-ethers');
//accounts 에 PK 셋팅
module.exports = {
  solidity: {
    version: '0.8.12',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: './contracts',
  },
  defaultNetwork: 'matic',
  networks: {
    hardhat: {},
    matic: {
      url: 'https://rpc-mumbai.matic.today',
      accounts: ['2cda07fd36def97a9edf2b3fbd831a414c5f68a31654a34782fccf782a1d8e4c'],
    },
  },
};