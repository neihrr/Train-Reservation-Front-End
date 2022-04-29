import jwtDecode from "jwt-decode";
import React  from "react";
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import "../styles/CancellationStyles.css"

import { Typography, Divider, Button } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

class Cancellation extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user_reservations:null,
            dom:null,
        }
        this.getReservations=this.getReservations.bind(this);

    }
    async getReservations(){
        const token = localStorage.getItem('access_token');
        this.user = jwt_decode(token);
        console.log(this.user);
     
        await axios.get("http://localhost:3001/user/reservation/"+this.user.sub).then(res=>
        {const reservations = res.data;
           

            
            this.setState({user_reservations:reservations});
            console.log(this.state.user_reservations);
        })
    }

    async deleteReservation(reservationId){
        await axios.delete("http://localhost:3001/reservation/"+reservationId);
        const filteredReservations = this.state.user_reservations.filter(res => res.reservationId !== reservationId);
        this.setState({user_reservations:{...filteredReservations}});
    }
    

    async componentDidMount(){
        await this.getReservations();
    }

    render(){
        return(
            <>
            <div className="brand-nav-cancel">RAIL-AWAY</div>
            <div className="outer-container-cancel">
                <h1 className="header">YOUR RESERVATIONS</h1>
                {
                    this.state.user_reservations && this.state.user_reservations.map(
                        (reservation) => {
                            return (
                           <Paragraph className="reservationDisplay">
                            <pre>First Name: {reservation.firstName} | Last Name: {reservation.lastName} | Departure: {reservation.departure} | Arrival: {reservation.arrival} | Date: {reservation.date} |Time: {reservation.time} | Car: {reservation.carInfo} | Seat Num: {reservation.seatInfo} 
                            <Button type="primary" className="cancel-click" onClick = {()=>this.deleteReservation(reservation.reservationId)}>Cancel</Button></pre>
                           </Paragraph>
                        );
                    })
                }
            </div>
            <div className="brand-footer-cancel">@ 2022 RAIL-AWAY - All Rights reserved.</div>
            </>
        );
    }

}

export default Cancellation;