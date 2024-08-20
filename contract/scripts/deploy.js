const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const DotaAmazingItem = await ethers.getContractFactory("DotaAmazingItem");

  //check balance of your account
  const balance = await ethers.provider.getBalance(deployer.address);
  console.log("Account balance:", ethers.formatEther(balance));

  //calculate the estimated gas
  const gasEstimate = await ethers.provider.estimateGas(
    DotaAmazingItem.getDeployTransaction()
  );
  console.log("Gas Estimate: ", gasEstimate.toString());

  const contract = await DotaAmazingItem.deploy();
  console.log("Contract Deployed to address:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
