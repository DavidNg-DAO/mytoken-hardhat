const { expect } = require("chai");

describe("MyToken", function () {
  it("Should assign total supply to the owner", async function () {
    const [owner] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("MyToken");
    const token = await Token.deploy();
    await token.deployed();

    const ownerBalance = await token.balanceOf(owner.address);
    const totalSupply = await token.totalSupply();

    expect(ownerBalance).to.equal(totalSupply);
  });
});
