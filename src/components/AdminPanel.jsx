import React from 'react';
import '../styles/AdminPanel.css';

import { Typography, Divider, Button } from 'antd';
import axios from 'axios';
const { Title, Paragraph, Text, Link } = Typography;


class AdminPanel extends React.Component {
    constructor(props){
        super(props);
     
        this.state = {
            items: null,
            revenue:0,
            data:null
        }
        this.returnCustomers=this.returnCustomers.bind(this);
        
    }

    getReservations(){
        axios.get("http://localhost:3001/reservation/").then(
            res=>{
                const reservations = res.data;
                this.setState({data:reservations});
                return reservations;
            }
        )

    }

    returnCustomers (){
        const arr = [];
        const ret = this.data.forEach((customer)=>{arr.push(<Paragraph className="customerDisplay">
           <pre>First Name: {customer.fname} | Last Name:{customer.lname} | Departure From: {customer.dep} | Car: {customer.car} | Seat: {customer.seat} | Ticket Cost: {customer.cost}  <Button type="primary">Cancel</Button></pre>
    
          </Paragraph>)});
        console.log(arr);
        return arr;
    }

    render(){
        return(
            <Typography>
                <Title>Welcome {localStorage.getItem('user_name')}</Title>
                {this.returnCustomers()}
                <Button type="primary">Total Revenue ${this.state.revenue}</Button>
            </Typography>
        );
    }
}
export default AdminPanel;