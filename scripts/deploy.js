const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("🚀 Deploying contracts with the account:", deployer.address);

  const MyTokenFactory = await ethers.getContractFactory("MyToken");
  const myToken = await MyTokenFactory.deploy();  // deploy the contract

  await myToken.waitForDeployment();  // ✅ THIS IS THE CORRECT LINE

  const deployedAddress = await myToken.getAddress(); // ✅ Get contract address

  if (deployedAddress) {
    console.log("✅ MyToken deployed to:", deployedAddress);
  } else {
    console.error("❌ Deployment failed: address is undefined");
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Deployment error:", error);
    process.exit(1);
  });
