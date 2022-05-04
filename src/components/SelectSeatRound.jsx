import React from 'react';
import {Row, Col, Button, Tabs } from 'antd';
import Seats from '../components/Seats';

class SelectSeatRound extends React.Component{

    constructor(props){
        super(props);
    }
    
    callback(key){
        console.log(key);
    }
    
    render(){
      
        const carValue = localStorage.getItem('carValue');
        console.log(carValue);
        const { TabPane } = Tabs;
        
        
        return(
            <>
            <div className="brand-nav-seat">RAIL-AWAY</div>
            <div className="container-seat">
            <h1 className="context-seat">Choose Your Seat from Car {carValue}</h1>
            <Tabs onChange={(key)=>this.callback(key)} type="card">
                <TabPane tab="Departure" key="1" >
                    <h2>{localStorage.getItem("departure")} to {localStorage.getItem("arrival")}</h2>
                    <Seats></Seats>
                </TabPane>
                <TabPane tab="Return" key="2" >
                    <h2>{localStorage.getItem("departure")} to {localStorage.getItem("arrival")}</h2>
                    <Seats></Seats>
                </TabPane>
            </Tabs>
            
            </div>
            <div className="brand-footer-seat">@ 2022 RAIL-AWAY - All Rights reserved.</div>
                   
            </>

           
        );
    }
    
}

export default SelectSeatRound;