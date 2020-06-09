import React from 'react';
import logo from './logo.svg';
import './App.css';
import FetchDrink from './Components/FetchDrink';
import DrinkGrid from './Components/DrinkCards';

function App() {
  return (
    <div className="App">
      <DrinkGrid />
    </div>
  );
}

export default App;
