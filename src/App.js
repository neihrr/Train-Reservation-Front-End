import React from 'react';
import './App.css';
import './Login'
import './components/SelectCar'
import './components/SelectSeat'
import Login from './Login';
import {BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      
      <Login></Login>

    </div>
  );
}

export default App;
