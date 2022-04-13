import React from 'react';
import '../styles/AdminPanel.css';

import { Typography, Divider, Button } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;
class AdminPanel extends React.Component {
    constructor(props){
        super(props);
        this.data = [{fname:"nehir",lname:"cesmeci",dep:"buffalo",car:"B",seat:20,cost:80},
        {fname:"dou",lname:"sonmez",dep:"istanbul",car:"c",seat:19,cost:80}];
        this.state = {
            items: null,
            revenue:0
        }
        this.returnCustomers=this.returnCustomers.bind(this);
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