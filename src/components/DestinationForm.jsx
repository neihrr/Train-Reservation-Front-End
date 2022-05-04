import React from "react";
import { Form, DatePicker, TimePicker, Tabs ,Button, Input } from 'antd';
import {BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
class DestinationForm extends React.Component {
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
                className="check_button-one-way"
                type="primary" 
                htmlType="submit">
                Check for Seats
                </Button>
            
            </Link>        
        </Form.Item>
    </Form>

        );
    }             
}

export default DestinationForm;