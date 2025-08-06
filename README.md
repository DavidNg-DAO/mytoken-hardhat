# MyToken Hardhat Project

This repository contains the full Hardhat setup for a custom ERC20-style token called **MyToken**, designed for testing and deployment on Ethereum-compatible networks.

## 🧠 What’s Inside

- ✅ Smart contract (`MyToken.sol`)
- ✅ Deployment script using Hardhat
- ✅ Unit tests
- ✅ Sample configuration (`hardhat.config.js`)
- ✅ Lock contract for demonstration

## 🛠️ Tools Used

- [Hardhat](https://hardhat.org/)
- [Ethers.js](https://docs.ethers.org/)
- [Chai](https://www.chaijs.com/) for assertions
- Solidity ^0.8.28

## 🧪 How to Use

### 1. Clone & Install
```bash
git clone https://github.com/DavidNg-DAO/mytoken-hardhat.git
cd mytoken-hardhat
npm install
npx hardhat compile
npx hardhat test
npx hardhat run scripts/deploy.js --network localhost
Author
David Ng — exploring Solidity, smart contracts, and Web3 infrastructure
GitHub: @DavidNg-DAO
