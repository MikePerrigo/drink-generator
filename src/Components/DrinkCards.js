import React from 'react';
import Grid from '@material-ui/core/Grid';
import FetchDrink from './FetchDrink';

class DrinkGrid extends React.Component {
    render () {
        return (
            <Grid container>
                <Grid item xs={12} spacing={12}>
                    <h1>Choose your sprint drink!</h1>
                </Grid>
                <Grid item xs={4}>
                    Hello 1
                </Grid>
                <Grid item xs={4}>
                    Hello 1
                </Grid>
                <Grid item xs={4}>
                    Hello 1
                </Grid>
            </Grid>
        );
    }
}

export default DrinkGrid