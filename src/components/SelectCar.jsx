import React from 'react';
import {Row, Col, Button } from 'antd';
import '../styles/selectCarStyles.css';
import {BrowserRouter as Router,Routes, Route, Link  } from 'react-router-dom';
import SelectSeat from '../components/SelectSeat';
import Cars from '../components/Cars.jsx';

class SelectCar extends React.Component{
    constructor(props){
        super(props);

        this.state={
            style:{
                background: '#0092ff', 
                padding: '8px 0',
            },
            
        };
    }

    render(){
        return(
            <>
            <div className='brand-nav-car'>RAIL-AWAY</div>
            <div className='container-car'>
                <h1 className='context-car'>Choose Your Car</h1>
                <br/>
                <h3>{localStorage.getItem('departure')} to {localStorage.getItem('arrival')}</h3>
                <Cars departure = {true}></Cars>
                
            </div>
            <div className="brand-footer-car">@ 2022 RAIL-AWAY - All Rights reserved.</div>
          

            </>
            
        );
    }
    
}

export default SelectCar;