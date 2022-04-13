import React from "react";
import { Form, DatePicker, TimePicker, Button, Input } from 'antd';
import {BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import '../styles/DestStyles.css';


class DestSelection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            departure:"",
            arrival:"",
            date:"",
            time:"",
            config:{
                rules:[
                    {
                        type:'object',
                        required:'true',
                        message: 'Please select time!',
                    }
                ]
            },
            formItemLayout:{
                labelCol: {
                    xs: {
                      span: 24,
                    },
                    sm: {
                      span: 8,
                    },
                  },
                  wrapperCol: {
                    xs: {
                      span: 24,
                    },
                    sm: {
                      span: 16,
                    },
                }
            }
        };
    }
    componentDidUpdate(){
        console.log(this.state.departure);
        console.log(this.state.arrival);
    
    }

    onFinish(values){
        console.log('Success:', values);
    }

    onFinishFailed(errorInfo){
        console.log('Failed:', errorInfo);
    }

    handleArrival(e){
        this.setState({arrival:e.target.value});
        localStorage.setItem('arrival',e.target.value);
    }
    handleDeparture(e){
        this.setState({departure:e.target.value});
        localStorage.setItem('departure',e.target.value);
    }
    handleTime(e){
        this.setState({time:e.target.value});
        localStorage.setItem('time',e.target.value);
    }
    handleDate(e){
        this.setState({date:e.target.value});
        localStorage.setItem('date',e.target.value);
    }
    

    render(){
        return(
            <div>
                <Form name="time_related_controls" id="form_element" {...this.state.formItemLayout} onFinish={(values)=>this.onFinish(values)}>
                <Form.Item
                    className="name_and_number_inputs"
                    name="departure"
                    label="Departure"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your departure location',
                    },
                    ]}
                >
                    <Input placeholder="Please input your departure location" onChange={(e)=>this.handleDeparture(e)}/>
                </Form.Item>
                <Form.Item
                 className="name_and_number_inputs"
                 name="arrival"
                 label="Arrival"
                 rules={[
                 {
                    required: true,
                    message: 'Please input your arrival location',
                 },
                 ]}
             >
                 <Input placeholder="Please input your arrival location" onChange={(e)=>this.handleArrival(e)}/>
             </Form.Item>
               
             <Form.Item
                 className="name_and_number_inputs"
                 name="date"
                 label="Date"
                 rules={[
                 {
                     required: true,
                     message: 'yyyy-mm-dd',
                 },
                 ]}
             >
                <Input placeholder="yyyy-mm-dd" onChange={(e)=>this.handleDate(e)}/>
             </Form.Item>

             <Form.Item
                 className="name_and_number_inputs"
                 name="time"
                 label="Time"
                 rules={[
                 {
                     required: true,
                     message: 'hh:mm',
                 },
                 ]}
             >
                 <Input placeholder="hh:mm" onChange={(e)=>this.handleTime(e)}/>
             </Form.Item>
                
                <Form.Item
                    wrapperCol={{
                    xs: {
                        span: 24,
                        offset: 0,
                    },
                    sm: {
                        span: 16,
                        offset: 8,
                    },
                    }}
                >
                    <Link to="/CarSelection">
                        <Button 
                        className="check_button"
                        type="primary" 
                        htmlType="submit">
                        Check for Seats
                        </Button>
                    
                    </Link>
                   
                   
                </Form.Item>
            </Form>
            </div>
        );
    }
}

export default DestSelection;