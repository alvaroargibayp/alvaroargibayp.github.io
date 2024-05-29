import React from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <div className='App-content'>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
