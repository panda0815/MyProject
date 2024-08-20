//this function is to check the amount ETH of your wallet
const { ethers } = require("ethers");
const dotenv = require("dotenv");

dotenv.config();

async function main() {
  if (!process.env.ALCHEMY_API_KEY || !process.env.WALLET_ADDRESS) {
    console.error("Missing environment variables. Please check .env file.");
    return;
  }

  const provider = new ethers.AlchemyProvider(
    "sepolia",
    process.env.ALCHEMY_API_KEY
  );
  const balance = await provider.getBalance(process.env.WALLET_ADDRESS);
  console.log("Wallet balance:", ethers.formatEther(balance), "ETH");
}

main();
