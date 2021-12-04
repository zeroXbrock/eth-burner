import "log-timestamp";
import { providers, Wallet } from "ethers";

import burn from "./burn";

// get args from cmd line
// ...
const ETH_RPC_URL = "http://localhost:8545";
const VICTIM_KEY = "0x0000000000000000000000000000000000000000";

async function main() {
    console.log(`Connected to ${ETH_RPC_URL}`);
    const provider = new providers.JsonRpcProvider(ETH_RPC_URL);
    const burnWallet = new Wallet(VICTIM_KEY, provider);
    await provider.ready;

    provider.on("block", async blockNumber => {
        console.log(`[BLOCK ${blockNumber}]`);
        await burn(burnWallet);
    });
}

main()
.then(_ => {
    process.exit(0);
}).catch(e => {
    console.error(e);
    process.exit(1);
});

export default {};
