import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const { getIcon } = require('../../model/util/util')

export default function Row(props) {
    return (
        <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={5}>
            <Grid item>
                <Typography>
                    <img width="32" height="32" alt='' src={getIcon(props.ticker)} /><br />
                    {props.name.concat(`(${props.ticker})`)}<br />
                    {props.balance.concat(" ETH")}
                </Typography>
            </Grid>
            <Grid item>
                <Typography>
                    <br/>{props.address}
                </Typography>
            </Grid>
        </Grid>
    );
}  