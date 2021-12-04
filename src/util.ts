import { BigNumber } from "@ethersproject/bignumber";

const GWEI = 1e9;

/** Returns human-readable gas price in gwei. */
export const gasPriceToGwei = (gasPrice: BigNumber) => (
    gasPrice.mul(100).div(GWEI).toNumber() / 100
);
