const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const MyToken = await ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy();

  await myToken.deployed(); // Wait for deployment to finish

  if (myToken.address) {
    console.log("✅ MyToken deployed to:", myToken.address);
  } else {
    console.log("❌ Deployment failed: myToken.address is undefined");
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Deployment error:", error);
    process.exit(1);
  });
