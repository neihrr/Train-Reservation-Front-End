import React from 'react';
import {Row, Col, Button, Tabs } from 'antd';
import '../styles/selectCarStyles.css';
import {BrowserRouter as Router,Routes, Route, Link  } from 'react-router-dom';
import SelectSeat from '../components/SelectSeat';
import Cars from '../components/Cars.jsx';


class SelectCarRound extends React.Component{
    constructor(props){
        super(props);
       
            
        
    }
    callback(key){
        console.log(key);
    }

    componentDidMount(){
        const access_token = localStorage.getItem("access_token");
        const arrival = localStorage.getItem("arrival");
        const departure = localStorage.getItem("departure");
        const date = localStorage.getItem("date");
        const returnDate = localStorage.getItem("returnDate");
        const isRound = localStorage.getItem("isRound");
        
        localStorage.clear();

        localStorage.setItem("access_token", access_token);
        localStorage.setItem("arrival", arrival);
        localStorage.setItem("departure", departure);
        localStorage.setItem("date", date);
        localStorage.setItem("returnDate", returnDate);
        localStorage.setItem("isRound", isRound);
    }
   

    render(){
        const { TabPane } = Tabs;
        return(
            <>
                <div className='brand-nav-car'>RAIL-AWAY</div>
                <h1 className='context-car'>Choose Your Car</h1>
                <Tabs onChange={(key)=>this.callback(key)} type="card" >
                <TabPane tab="Departure" key="1" >
                    <h2>{localStorage.getItem("departure")} to {localStorage.getItem("arrival")}</h2>
                    <Cars departure = {true}/>
                </TabPane>
                <TabPane tab="Return" key="2">
                    <h2>{localStorage.getItem("arrival")} to {localStorage.getItem("departure")}</h2>
                    <Cars></Cars>
                </TabPane>
                </Tabs>
                
                <div className="brand-footer-car">@ 2022 RAIL-AWAY - All Rights reserved.</div>
            </>
            
        );
    }

}

export default SelectCarRound;