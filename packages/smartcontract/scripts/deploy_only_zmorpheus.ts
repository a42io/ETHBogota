// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import { poseidon_gencontract as poseidonContract } from "circomlibjs";

async function main() {
  const [signer] = await ethers.getSigners();

  /**
   *
   */
  const Zmorpheus = await ethers.getContractFactory("Zmorpheus", {
    libraries: {
      IncrementalBinaryTree: "0xD8f10dF965C53B8448a77B7d16c44B36b56dE095",
    },
  });
  const zmorpheus = await Zmorpheus.deploy(
    [
      {
        merkleTreeDepth: 16,
        contractAddress: "0x9D6177Ad9031846C2a3F3C791CbCdae87565E962",
      },
    ],
    [signer.address, "0x199012076Ea09f92D8C30C494E94738CFF449f57"],
    ethers.utils.parseEther("0.01")
  );

  await zmorpheus.deployed();
  console.log("zmorpheus deployed to:", zmorpheus.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
