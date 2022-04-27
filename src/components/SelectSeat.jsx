import React from 'react';
import {Row, Col, Button } from 'antd';
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import '../styles/selectSeatStyles.css';
import axios from 'axios';
class SelectSeat extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
       
        this.state={
       
            seatValues:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
            reservations:null,
            isFull:null,
            dom : null,
        };
    }
    handleClickCount = () => {
    
    }

    handleChange = (index) =>{
        console.log("called");
      
        localStorage.setItem('seat',this.state.seatValues[index]);
    }

    async componentDidMount(){
        const seats = [];
        await axios.get("http://localhost:3001/reservation/").then(
            res=>{
                const reservations = res.data;
                this.setState({reservations:reservations});
                return reservations;
            })
            
            //if the car selected by customer is the same as the one coming from backend push its info to seats array. set that as a state var
            if(this.state.reservations !== undefined && this.state.reservations !== null && this.state.reservations.length > 0){
                this.state.reservations.forEach(reservation=>{
                    if(reservation.carInfo === localStorage.getItem('carValue')){
                        seats.push(reservation.seatInfo);
                  
                    }
    
                })
            }


            
            let seatStatus = []
            console.log(seats);
            for(let i = 1; i <= 24; i++){
                

                if(seats.includes("" + i)){
                    seatStatus[i] = true;
                    continue;
                }
                
                seatStatus[i] = false;
            }

            const cols = [];
            const rows = [];
            var counter = 1;

            for(let col=0; col<24; col++){
                if(seatStatus[col+1]==true){
                    cols.push(
                        <Col className="gutter-row" span={6}>
                        <div className="car-container-first" style={this.style}>
                            <Link to="/PopUp">
                            <Button type="primary" style={{ backgroundColor : "orange"}} onClick={()=>{this.handleChange(col+1)}} disabled>{counter++}</Button>
        
                            </Link>
                        </div>
                    </Col>)
                    
                }

                if(seatStatus[col+1]==false){
                    cols.push(
                        <Col className="gutter-row" span={6}>
                        <div className="car-container-first" style={this.style}>
                            <Link to="/PopUp">
                            <Button type="primary" style={{ backgroundColor : "purple"}} onClick={()=>{this.handleChange(col+1)}} >{counter++}</Button>
        
                            </Link>
                        </div>
                    </Col>)
                    
                }
                
                
            }

                
            for(let row=0; row<24; row++){
                    rows.push(<Row className="outer-row-first" classgutter={16}>
                    {cols[row++]}
                    {cols[row++]}
                    {cols[row++]}
                    {cols[row++]}
                    </Row>);
            }

            this.setState({dom : rows});
    }

    
    render(){
      
        const carValue = localStorage.getItem('carValue');
        console.log(carValue);
        
        
        return(
            <>
            <div className="brand-nav">RAIL-AWAY</div>
            <div className="container">
            <h1 className="context">Select Seat from Car {carValue}</h1>
            {this.state.dom}

            </div>
                   
            </>

           
        );
    }
    
}

export default SelectSeat;