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
            user_reservations:""
        }
        this.getReservations=this.getReservations.bind(this);

    }
    getReservations(){
        const token = localStorage.getItem('access_token');
        this.user = jwt_decode(token);
        axios.get("https://localhost:3001/user/reservation"+this.user.userId).then(res=>
        {const reservations = res.data;
            this.setState({user_reservations:reservations});
        })
    }

    componentDidMount(){
        this.getReservations();
    }

    returnReservations(){
        const arr = [];
        const ret = this.user_reservations.forEach((reservation)=>{arr.push(<Paragraph className="reservationDisplay">
        <pre>{reservation} <Button type="primary">Cancel</Button></pre>
 
       </Paragraph>)})
    }

    render(){
        return(
            <div>
                <h1>YOUR RESERVATIONS</h1>
            </div>
        );
    }

}

export default Cancellation;