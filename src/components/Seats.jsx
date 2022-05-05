import React from 'react';
import {Row, Col, Button } from 'antd';
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import '../styles/selectSeatStyles.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
class Seats extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.history = this.props.navigation;
       
        this.state={
       
            seatValues:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
            reservations:null,
            isFull:null,
            dom : null,
        };
    }

    handleChange = (index) =>{

        if(this.props.departure){
            localStorage.setItem("seatValueDeparture", this.state.seatValues[index]);
        }else{
            localStorage.setItem("seatValueReturn", this.state.seatValues[index]);
        }

        const _departure = localStorage.getItem("seatValueDeparture");
        const _return = localStorage.getItem("seatValueReturn");

        if(_departure && _return){
            this.history("/PopUp");
        }
        if(localStorage.getItem("isRound") === "false"){
            this.history("/PopUp");
        }
        
      
    }

    async componentDidMount(){
        const seatsDep = [];
        const seatsRet = [];
        await axios.get("http://localhost:3001/reservation/").then(
            res=>{
                const reservations = res.data;
                this.setState({reservations:reservations});
                console.log(reservations);
                return reservations;
            })
            console.log("reservations");
            console.log(this.state.reservations);
            
            //if the car selected by customer is the same as the one coming from backend push its info to seats array. set that as a state var
            
            if(this.state.reservations !== undefined && this.state.reservations !== null && this.state.reservations.length > 0){
                this.state.reservations.map(reservation=>{
                    if(reservation.carInfo === localStorage.getItem('carValueDeparture')){
                        seatsDep.push(reservation.seatInfo);
                    }
                })
            }

            if(localStorage.getItem("isRound") === "true"){
                this.state.reservations.map(reservation=>{
                    if(reservation.carInfo === localStorage.getItem('carValueReturn')){
                        seatsRet.push(reservation.seatInfo);
                    }
                })
                
            }

            let seatStatusDep = []
            console.log("seats:");
            console.log(seatsDep);
            console.log(seatsRet);
            for(let i = 1; i <= 24; i++){
        
                if(seatsDep.includes("" + i)){
                    seatStatusDep[i] = true;
                    continue;
                }
                seatStatusDep[i] = false;
            }

            let seatStatusRet = [];
            for(let i = 1; i <= 24; i++){
        
                if(seatsRet.includes("" + i)){
                    seatStatusRet[i] = true;
                    continue;
                }
                seatStatusRet[i] = false;
            }

            const cols = [];
            const rows = [];
            var counter = 1;

            for(let col=0; col<24; col++){
                if(seatStatusDep[col+1]==true || seatStatusRet[col+1]==true){
                    cols.push(
                        <Col className="gutter-row-seat" span={6}>
                        <div className="car-container-first-seat" style={this.style}>
                            <Button type="primary" className="seat-box" style={{ backgroundColor : "green"}} onClick={()=>{this.handleChange(col+1)}} disabled>{counter++}</Button>
                        </div>
                    </Col>)    
                }

                if(seatStatusDep[col+1]==false || seatStatusRet[col+1]==false){
                    cols.push(
                        <Col className="gutter-row-seat" span={6}>
                        <div className="car-container-first-seat" style={this.style}>
                            <Button type="primary" className="seat-box" style={{ backgroundColor : "purple"}} onClick={()=>{this.handleChange(col+1)}} >{counter++}</Button>
                        </div>
                    </Col>)    
                }    
            }

                
            for(let row=0; row<24; row++){
                    rows.push(<Row className="outer-row-first-seat" classgutter={16}>
                    {cols[row++]}
                    {cols[row++]}
                    {cols[row++]}
                    {cols[row++]}
                    </Row>);
            }

            this.setState({dom : rows});
    }

    render(){
        return(
            this.state.dom
        );
    }

} 

export default function(props) {
    const navigation = useNavigate();
    return <Seats {...props} navigation={navigation} />;
}