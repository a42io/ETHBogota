const ethers = require("hardhat").ethers;

module.exports = [
  [
    {
      merkleTreeDepth: 16,
      contractAddress: "0x9D6177Ad9031846C2a3F3C791CbCdae87565E962",
    },
  ],
  [
    "0x0C7f08080d325dae4072B45CdE3a73717E3a7223",
    "0x199012076Ea09f92D8C30C494E94738CFF449f57",
  ],
  ethers.utils.parseEther("0.01"),
];
