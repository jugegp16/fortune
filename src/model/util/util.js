var ethers = require('ethers');

/**
 * 
 */
export const getProvider = () =>
    new Promise((resolve, reject) => {
        window.addEventListener("load", async () => {
            if (window.ethereum) {
                try {
                    let provider = new ethers.providers.Web3Provider(window.ethereum);
                    resolve(provider);
                } catch (err) {
                    reject(err);
                }
            }
        });
    });


/**
 * 
 */
document.getElementById('requestPermissionsButton', requestPermissions);
export function requestPermissions(provider) {
    provider
        .send(
            'wallet_requestPermissions', [{
                'eth_accounts': {},
            }])
        .then((permissions) => {
            const accountsPermission = permissions.find(
                (permission) => permission.parentCapability === 'eth_accounts'
            );
            if (accountsPermission) {
                console.log('eth_accounts permission successfully requested!');
            }
        })
        .catch((error) => {
            if (error.code === 4001) {
                // EIP-1193 userRejectedRequest error
                console.log('Permissions needed to continue.');
            } else {
                console.error(error);
            }
        });
}


export const loadWallet = async (provider) => {
    return await provider.send('eth_requestAccounts');
};

export const getBalance = async (provider, activeWallet) => {
    var balance = await provider.getBalance(activeWallet[0]);
    return ethers.utils.formatEther(balance);
};

export const getPermissions = async (provider) => {
    return await provider.send('eth_requestAccounts');
}

/**
 * 
 */
export function getIcon(ticker) {
    var http = new XMLHttpRequest();
    http.open('HEAD', `/assets/icons/${ticker.toLowerCase()}.svg`, false);
    http.send()
    if (http.status === 200) {
        return  `/assets/icons/${ticker.toLowerCase()}.svg`;
    } else {
        return `/assets/icons/generic.svg`
    }
}