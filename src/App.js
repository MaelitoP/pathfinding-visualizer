import React from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar';
import PathfindingVisualizer from './components/PathfindingVisualizer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PathfindingVisualizer></PathfindingVisualizer>
    </div>
  );
}

export default App;