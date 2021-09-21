import React, { useState, useEffect } from 'react';
import CenteredGrid from '../grid/grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import MainMenu from '../menu/menu';
import Typography from '@material-ui/core/Typography';

const { setupAccount } = require("../../model/wallet.js")

export default function App() {
    const [tokens, setTokens] = useState(0);
    const [balance, setBalance] = useState(0);
    const [address, setAddress] = useState(0);

    useEffect(() => {
        setup();
        setTimeout(() => {
            setup();
        }, 1000);
    });

    const setup = async () => {
        var wallet = await setupAccount();
        if (wallet) {
            setTokens(wallet.tokens);
            setAddress(wallet.address);
            setBalance(wallet.balance);
        }
    }

    return (
        <div>
            {
                (!tokens || !address || !balance) ?
                    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
                        <CircularProgress />
                        <Typography color="secondary">Loading Web3, accounts, and contract...</Typography>
                    </Grid>
                    :
                    <Grid container justifyContent="space-between">
                        <Typography color="secondary" variant="h6">
                            {`Balance: ${balance} ETH`}
                        </Typography>
                        <Typography color="secondary" variant="h6">
                            {`User: ${address}`}
                        </Typography>
                        <MainMenu/>
                        <CenteredGrid tokens={tokens} address={address[0]} balance={balance} />
                    </Grid>
            }
        </div>
    );
}
