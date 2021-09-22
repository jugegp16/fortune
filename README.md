# fortune

fortune is a rudimentary ethereum(ETH) dApp built on ethers.js and the etherscan api. Ethers is a powerful library that interacts with the ethereum blockchain and RPC, aids smart contract creation/deployment and much more. Etherscan on the other hand is a collection of services that provide on-chain data and analytics. I will migrate all Etherscan requests to 'The Graph', an indexing protocol for querying the ETH network, in order to eliminate the API call limit of this service.


The goal of this project was to explore the ETH ecosystem, create a template ui for contract integration, and as much as I fought it, learn React 😄 

## Background
if you do not have a crypto wallet, go ahead and create one using [MetaMask](https://metamask.io/). 
Out of the box, MetaMask handles public and private key creation as well as connection to the Ethereum blockchain and several test networks.

For this project, I used the Ropsten test network as my staging evironment. 
Once you create a wallet enter your public key(ex. 0xc37da9811b67ee0e0227ab564bae104d9e76d043) into the [Ropsten Eth faucet](https://faucet.ropsten.be/). This will que a transaction to deposit test ether into your newly created crypto wallet.

## Run locally
```sh
npm install
npm start
```