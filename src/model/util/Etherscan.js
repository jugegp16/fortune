const config = require("../../config/config.js");

const host = {
    mainnet: 'https://api.etherscan.io/api',
    ropsten: 'https://api-ropsten.etherscan.io/api'
}

const createGetUrl = (url, params) => {
    let p = [];
    Object.keys(params).forEach(key =>
        p.push(`${key}=${params[key]}`)
    );
    return `${url}?${p.join('&')}`;
}

/**
 * 
 * @param {String} network network
 * @param {String} address hex address of user's wallet
 */
export async function getTokenTxs(network, address) {
    let url = createGetUrl(host[network], {
        module: 'account',
        action: 'tokentx',
        address: address,
        startblock: '0',
        endblock: '99999999',
        sort: 'asc',
        apikey: config.etherscanApiKey
    })
    try {
        let res = await fetch(url);
        if (res.status === 200) {
            let data = await res.json();
            if (data.status === "1"){ // max limit on api
                return data.result;
            }
        }
    } catch (error) {
        console.log(error);
    }
}

/**
 * 
 * @param {String} network network
 * @param {String} address hex address of user's wallet
 * @param {String} contractaddress hex address of token's contract
 */
export async function getTokenBalance(network, contractaddress, address) {
    let url = createGetUrl(host[network], {
        module: 'account',
        action: 'tokenbalance',
        contractaddress: contractaddress,
        address: address,
        tag: 'latest',
        apikey: config.etherscanApiKey
    })
    try {
        let res = await fetch(url);
        if (res.status === 200) {
            let data = await res.json();
            if (data.status === "1"){ // max limit on api
                return data.result;
            }
        }
    } catch (error) {
        console.log(error);
    }
}