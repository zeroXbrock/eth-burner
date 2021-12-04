import { utils, Wallet } from "ethers";
import { gasPriceToGwei } from "./util";
const { formatEther } = utils;

const burn = async (burnWallet: Wallet) => {
    const balance = await burnWallet.getBalance();
        if (balance.isZero()) {
            console.log(`==== Balance is zero`);
            return;
        }

        const gasPrice = balance.div(21000);
        if (gasPrice.lt(1e9)) {
            console.log(` Balance too low to burn (balance=${formatEther(balance)} gasPrice=${gasPriceToGwei(gasPrice)})`);
            return;
        }

        try {
            console.log(` Burning ${formatEther(balance)}`);
            const tx = await burnWallet.sendTransaction({
                to: burnWallet.address,
                gasLimit: 21000,
                gasPrice,
            });
            console.log(` Sent tx with nonce ${tx.nonce} burning ${formatEther(balance)} ETH at gas price ${gasPriceToGwei(gasPrice)}`);
        } catch (err: any) {
            console.log(` Error sending tx: ${err.message ?? err}`);
        }
}

export default burn;
