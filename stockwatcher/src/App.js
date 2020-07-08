import React from 'react';
import './App.css';
import StockInfo from './stockInfo.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Stock Watcher
        </h1>
      </header>
      <div>
        <StockInfo/>
      </div>
    </div>
  );
}

export default App;
