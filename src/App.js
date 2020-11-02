import React from 'react'
import './App.css';

import { Routes }from './pages/routes'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
