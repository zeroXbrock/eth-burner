import { utils, Wallet } from "ethers";
import args from "./args";
import { gasPriceToGwei } from "./util";
const { formatEther } = utils;
const flashbotsBeerFund = args.beerFund;

const burn = async (burnWallet: Wallet) => {
    const balance = await burnWallet.getBalance();
    if (balance.isZero()) {
        console.log(`Balance is zero`);
        return;
    }

    const gasPrice = balance.div(21000);
    if (gasPrice.lt(1e9)) {
        console.log(`Balance too low to burn (balance=${formatEther(balance)} gasPrice=${gasPriceToGwei(gasPrice)}) gwei`);
        return;
    }
    const leftovers = balance.sub(gasPrice.mul(21000));
    console.log(`Leftovers: ${utils.formatEther(leftovers)} ETH`);

    try {
        console.log(`Burning ${formatEther(balance)}`);
        const nonce = await burnWallet.provider.getTransactionCount(burnWallet.address);
        const tx = await burnWallet.sendTransaction({
            to: flashbotsBeerFund,
            gasLimit: 21000,
            gasPrice,
            nonce,
            value: leftovers,
        });
        console.log(`Sent tx with nonce ${tx.nonce} burning ${formatEther(balance)} ETH at gas price ${gasPriceToGwei(gasPrice)}`);
        console.log(`Beer fund balance: ${flashbotsBeerFund && utils.formatEther(await burnWallet.provider.getBalance(flashbotsBeerFund))} ETH`);
    } catch (err: any) {
        console.log(`Error sending tx: ${err.message ?? err}`);
    }
}

export default burn;
