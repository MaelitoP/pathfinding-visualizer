import React from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar';
import PathfindingVisualizer from './visualizer/PathfindingVisualizer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PathfindingVisualizer></PathfindingVisualizer>

      <div className="footer">
        <p>Made by Maël Le Petit</p>
      </div>
    </div>
  );
}

export default App;
