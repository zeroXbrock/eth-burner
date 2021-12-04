# eth-burner

Watches each block for a balance update, and if one is detected, burns all that ETH by sending the ETH to itself and paying the highest possible transaction fee, effectively burning it. Technically, miners receive this money :)

## wanna burn?

```sh
# only do this once
yarn install

# burn eth at account corresponding to given prvkey
yarn start --private-key <prvkey> --rpc-url https://eth-mainnet.alchemyapi.io/v2/<key>
```

_If you want to test this out without burning real ETH, use a testnet provider or a hardhat fork with url `http://localhost:8545`._
