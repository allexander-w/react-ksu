import React from 'react'
import './App.css';

import { Routes }from './pages/routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { MainContext } from './contexts/MainContext';

function App() {


  const func = num => {
    console.log(num)
  }

  return (
    <MainContext.Provider value={{ func }}>
      <Router>
        <Routes />
      </Router>
    </MainContext.Provider>
  );
}

export default App;
