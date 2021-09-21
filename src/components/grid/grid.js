import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Row from './row.js';
import Typography from '@material-ui/core/Typography';

const { getIcon } = require('../../model/util/util')

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        item: true,
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    border: {
        padding: theme.spacing(2),
        boxShadow: "2px 3px 30px #9E9E9E",
        backgroundColor: theme.palette.secondary.light
    }
}));

export default function CenteredGrid(props) {
    const classes = useStyles();
    var elements = []
    Object.entries(props.tokens).forEach(([key, value]) => {
        elements.push(
            <Grid item sm key={key}>
                <Paper className={classes.paper}>
                    <Typography display='block'>
                        <img width="32" height="32" alt='' src={getIcon(value.ticker)} /><br />
                        {key.concat(`(${value.ticker})`)}<br />
                        <span>{value.balance.concat(" ETH")}</span>
                    </Typography>
                    <Typography display='block'>
                        {value.contractAddress}
                    </Typography>
                    {/* <Row address={value.contractAddress} name={key} ticker={value.ticker} balance={value.balance}/> */}
                </Paper>
            </Grid>
        )
    });
    return (
        <Grid container spacing={0} alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
            <Box className={classes.border} borderRadius="borderRadius">
                <Grid container className={classes.root} direction='column' spacing={2}>
                    {elements}
                </Grid>
            </Box>
        </Grid>
    );
}