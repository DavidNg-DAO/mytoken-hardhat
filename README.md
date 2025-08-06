# 🦾 MyToken Hardhat Project

This project demonstrates a basic ERC-20 token smart contract using the Hardhat development environment. It includes contract code, tests, and deployment scripts built for learning and practical development in Web3.

## 🔧 Project Structure

- `contracts/MyToken.sol` — Your ERC-20 Token contract (custom name: `MyToken`)
- `contracts/Lock.sol` — Sample locking contract
- `scripts/deploy.js` — Deployment script for Hardhat
- `test/Lock.js` — Sample test using Mocha/Chai
- `hardhat.config.js` — Hardhat configuration

## 🚀 How to Use

To run tasks, open a terminal in this folder and try:

```bash
npx hardhat help
npx hardhat compile
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost


