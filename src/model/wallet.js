import { ethers } from 'ethers';

const { 
    getProvider,
    loadWallet,
    getBalance
} = require("./util/util");

const {
  getTokenTxs,
  getTokenBalance,
} = require("./util/Etherscan.js");

const config = require("../config/config.js");

export async function setupAccount() {
    var tokens = {};
    var totalBalance = 0;
    const provider = await getProvider();
    var address = await loadWallet(provider);

    // eth
    var ethBalance = await getBalance(provider, address);
    totalBalance = parseFloat(ethBalance)
    tokens['Ethereum'] = {};
    tokens['Ethereum'].balance = ethBalance.slice(0, config.formatSpaces);
    tokens['Ethereum'].ticker = 'ETH';

    // erc-20 tokens
    const tokenTxs = await getTokenTxs(config.network.ropsten, address[0]);
    if (!tokenTxs) { return; }
    tokenTxs.forEach((tx) => {
        console.log(tx)
        var name = tx['tokenName'];
        if (!(name in tokens)) {
            tokens[name] = {};
            tokens[name].contractAddress = tx['contractAddress'];
            tokens[name].ticker = tx['tokenSymbol'];
        }
    })

    // set balances for each token -- need to get other info too....
    for (const [key, value] of Object.entries(tokens)) {
        if (key !== 'Ethereum') {
            const balance = await getTokenBalance(config.network.ropsten, value.contractAddress, address[0]);
            if (!balance){ return; } 
            totalBalance += parseFloat(ethers.utils.formatEther(balance));
            value.balance = ethers.utils.formatEther(balance).slice(0, config.formatSpaces);
        }
    }

    // add sort by highest value... can remove totalBalance and format in that loop as well.
    return {
        tokens: tokens,
        address: address,
        balance: totalBalance.toString().slice(0, config.formatSpaces)
    }
}
