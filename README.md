# eth-burner

Watches each block for a balance update, and if one is detected, burns all that ETH by sending the ETH in the account to itself and paying the highest possible transaction fee, effectively burning it from the account.

Technically, the ETH is not actually burned (permanently erased). It's just collected by miners :)

## wanna burn?

```sh
# only do this once
yarn install

# burn eth in account corresponding to given prvkey
yarn start -k <prvkey> -u https://eth-mainnet.alchemyapi.io/v2/<key>
```

_If you want to test this out without burning real ETH, use a testnet provider or a hardhat fork with url `http://localhost:8545`._
