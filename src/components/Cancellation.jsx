import jwtDecode from "jwt-decode";
import React  from "react";
import jwt_decode from 'jwt-decode';
import axios from 'axios';

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
     
        await axios.get("http://localhost:3001/user/reservation/"+this.user.sub).then(res=>
        {const reservations = res.data;
            console.log(reservations);

            
            this.setState({user_reservations:reservations});
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
            <div>
                <h1>YOUR RESERVATIONS</h1>
                {
                    this.state.user_reservations && this.state.user_reservations.map(
                        (reservation) => {
                            return (
                           <Paragraph className="reservationDisplay">
                            <pre>{reservation.firstName}, {reservation.lastName}, {reservation.departure}, {reservation.arrival}, {reservation.time}, {reservation.carInfo}, {reservation.seatInfo} 
                            <Button type="primary" onClick = {()=>this.deleteReservation(reservation.reservationId)}>Cancel</Button></pre>
                           </Paragraph>
                        );
                    })
                }
            </div>
        );
    }

}

export default Cancellation;