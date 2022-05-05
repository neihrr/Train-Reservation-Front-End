import React from "react";
import { Form, DatePicker, TimePicker, Tabs ,Button, Input } from 'antd';
import {BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

class DestinationRoundForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
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
        }
    }

    handleArrival(e){
        localStorage.setItem('arrival',e.target.value);
    }

    handleDeparture(e){
        localStorage.setItem('departure',e.target.value);
    }

    handleDate(e){
        localStorage.setItem('date',e.target.value);
    }

    handleReturnDate(e){
        localStorage.setItem('returnDate',e.target.value);
    }

    render(){
        return(
            <Form name="time_related_controls" id="form_element-first" {...this.state.formItemLayout} onFinish={(values)=>this.onFinish(values)}>
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
        name="returnDate"
        label="Date of Return"
        rules={[
        {
            required: true,
            message: 'yyyy-mm-dd',
        },
        ]}
    >
        <Input placeholder="yyyy-mm-dd" onChange={(e)=>this.handleReturnDate(e)}/>
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
            <Link to="/SelectCarRound">
                <Button 
                className="check_button-one-way"
                type="primary" 
                htmlType="submit" 
                onClick={() => localStorage.setItem("isRound", true)}>
                Check for Seats
                </Button>
            
            </Link>        
        </Form.Item>
    </Form>

        );
    }             
}

export default DestinationRoundForm;