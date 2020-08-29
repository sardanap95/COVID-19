import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

import styles from './cards.module.css'

const Cards = (props) => {
    if (!props.data.confirmed) {
        return 'Loading...';
    }
    console.log(props);
    return (
        <div className={styles.comtainer}>
            <Grid container spacing={3} justify="center">
                <Grid item component={props.data}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Infected </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={props.data.confirmed.value} duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary" > REAL DATA</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            <Grid item component={props.data}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom> Recovered </Typography>
                    <Typography variant="h5">Real Data</Typography>
                    <Typography color="textSecondary" > REAL DATA</Typography>
                    <Typography variant="body2">Number of recoveries from cases of COVID-19</Typography>
                </CardContent>
            </Grid>

            <Grid item component={props.data}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom> Deaths </Typography>
                    <Typography variant="h5">Real Data</Typography>
                    <Typography color="textSecondary" > REAL DATA</Typography>
                    <Typography variant="body2">Number of deaths cases of COVID-19</Typography>
                </CardContent>
            </Grid>
        </div>
    );
}

export default Cards;