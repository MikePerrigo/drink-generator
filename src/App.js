import React from 'react';
import './App.css';
import FetchDrink from './Components/FetchDrink';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <Grid container spacing={8} style={{textAlign: "center"}}>
      <Grid item xs={12}>
        <h1>Choose Your Sprint Drink!</h1>
      </Grid>
      <Grid item xs={6}>
        <FetchDrink />
      </Grid>
      <Grid item xs={6}>
        <FetchDrink />
      </Grid>

    </Grid>
  );
}

export default App;
