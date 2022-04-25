import React from 'react';
import '../styles/AdminPanel.css';
import { Typography, Button,Row,Col } from 'antd';
import axios from 'axios';
const { Title, Paragraph, Text, Link } = Typography;


class AdminPanel extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            items: null,
            revenue:0,
            data:null,
            carValues:['A','B','C','D','E','F','G','H','J','K','L'],
            dom:null,
        }
        
        this.deletion=this.deletion.bind(this);

    }

    async componentDidMount(){
        const cars = [];
        const reservations = await axios.get("http://localhost:3001/reservation/").then(
            res=>res.data)

        const revenue = await axios.get("http://localhost:3001/reservation/revenue").then(
            res=>res.data)

        if(reservations !== undefined && reservations !== null && reservations.length > 0){
            reservations.forEach(reservation=>{
                cars.push(reservation.carInfo);
                this.setState({fullCars:cars});})
        }  
        console.log(cars);

        let carStatus = [];

        for(let i = 0; i<=this.state.carValues.length; i++){
            if(cars.includes(this.state.carValues[i])){
                carStatus[i] = true;
                continue;
            }
            carStatus[i] = false;
        }
        console.log(carStatus);

        const cols = [];
        const rows = [];
 

        for (let i=0; i<=this.state.carValues.length; i++){
            if(carStatus[i] == true){
                cols.push(
                    <Col key = {i} className="gutter-row" span={6}>
                        <div className="car-container-first" style={this.style}>
                            <Link to="/PopUp">
                            <Button type="primary" onClick={()=>{this.handleChange(i)}}></Button>

                            </Link>
                        </div>
                    </Col>
                );
            }
            else if(carStatus[i]==false){
                cols.push(
                    <Col key = {i} className="gutter-row" span={6}>
                    <div className="car-container-first" style={this.style}>
                        <Link to="/PopUp">
                        <Button type="primary" onClick={()=>{this.handleChange(i)}} disabled></Button>
        
                        </Link>
                    </div>
                </Col>);

            }

            for(let row=0; row<12; row++){
                rows.push(
                    <Row  className="outer-row-first" classgutter={16}>
                        {cols[row++]}
                        {cols[row++]}
                        {cols[row++]}
                        {cols[row++]}
                    </Row>
                )
            }
            this.setState({dom: rows});
            
        }
        
    }

    deletion(index){
        index = parseInt(index);
        console.log(index);
        console.log(this.state.data[index]);
        const reservation_token = this.state.data[index].reservationId;
        axios.delete("http://localhost:3001/reservation/"+reservation_token);
    }

    handleChange = (index) =>{
        localStorage.setItem('carValue',this.state.carValues[index]);
    }


    render(){
        return(
            <div>
                {this.state.dom}
            </div>
           
        );
    }
}
export default AdminPanel;