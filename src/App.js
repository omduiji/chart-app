import './App.css';
import React from 'react';
import Sidemenu from './components/sidemenu';
import Inputs from './components/inputs/index';
import Chart from './components/chart';

function App() {
  return (
    <div className="App">
      <Sidemenu></Sidemenu>
      <main className="main">
        <Inputs></Inputs>
        <div className="chart-body">
          <Chart></Chart>
        </div>
      </main>
    </div>
  );
}

export default App;
