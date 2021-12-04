require("dotenv").config();
import { ethers, providers, BigNumber, Wallet } from "ethers";
import "log-timestamp";

if (!process.env.ETH_RPC_URL) {
    console.log("Please define ETH_RPC_URL in .env");
    process.exit(2);
}

const ETH_RPC_URL = process.env.ETH_RPC_URL || "";

async function main() {
    console.log(`Connected to ${ETH_RPC_URL}`)
}

main()
.then(_ => {
    process.exit(0);
}).catch(e => {
    console.error(e);
    process.exit(1);
});

export default {};
