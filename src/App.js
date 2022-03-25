import logo from './logo.svg';
import React from 'react';
import './App.css';
import './Login'
import './SelectCar'
import './SelectSeat'
import Login from './Login';
import SelectCar from './SelectCar';
import SelectSeat from './SelectSeat';
import {BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      
      <Login></Login>

    </div>
  );
}

export default App;
