import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import DestSelection from './components/DestSelection.jsx';
import SelectCar from './components/SelectCar.jsx';
import SelectSeat from './components/SelectSeat.jsx';
import PopUpBook from './components/PopUpBook.jsx';
import AdminPanel from './components/AdminPanel.jsx';
import PurchaseSuccess from './components/PurchaseSuccess.jsx';
import Cancellation from './components/Cancellation.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>

          <Route path="/Destination" element={<DestSelection/>}></Route>
          <Route path="/CarSelection" element={<SelectCar/>}></Route>
          <Route path="/SeatSelection" element={<SelectSeat/>}></Route>
          <Route path="/PopUp" element = {<PopUpBook/>}></Route>
          <Route path="/AdminPanel" element = {<AdminPanel/>}></Route>
          <Route path="/PurchaseSuccess" element = {<PurchaseSuccess/>}></Route>
          <Route path="/Cancellation" element = {<Cancellation/>}></Route>
          <Route path="/" element={<App/>}></Route>
        
      </Routes>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
