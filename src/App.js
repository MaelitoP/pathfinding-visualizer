import React from 'react';
import { isMobile } from 'react-device-detect';
import './App.css';

import Navbar from './components/navbar/Navbar';
import PathfindingVisualizer from './components/PathfindingVisualizer';

function App() {
  if (isMobile) {
    <div className="mobile">
      <h3>The Pathfinding Visualizer app is unavailable on mobile.</h3>
    </div>
  } else {
    return (
      <div className="App">
        <Navbar />
        <PathfindingVisualizer></PathfindingVisualizer>
      </div>
    );
  }
}

export default App;