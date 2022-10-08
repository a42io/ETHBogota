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
      IncrementalBinaryTree: "0x3EF4D8f281335aA21336A63D1da3A158Fa63b9CC",
    },
  });
  const zmorpheus = await Zmorpheus.deploy(
    [
      {
        merkleTreeDepth: 16,
        contractAddress: "0x674Ae972F5B4E1dcc7f1BFAdf14dc00A5628026a",
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
