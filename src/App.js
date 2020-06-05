import React from 'react';
import logo from './logo.svg';
import './App.css';
import FetchDrink from './Components/FetchDrink';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Sprint Drink Generator
        </p>
        <div>
        <FetchDrink />
      </div>
      </header>
    </div>
  );
}

export default App;
