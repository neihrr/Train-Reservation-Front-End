import React from "react";
import { Form, DatePicker, TimePicker, Button, Input } from 'antd';
import {BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import '../styles/DestStyles.css';


class DestSelection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            first_name:"",
            last_name:"",
            number:"",
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

    
    

    onFinish(values){
     
        console.log('Success:', values);
    };

    onFinishFailed(errorInfo){
        console.log('Failed:', errorInfo);
    };
    render(){
        return(
            <div>
                <Form name="time_related_controls" id="form_element" {...this.state.formItemLayout} onFinish={this.onFinish}>
                <Form.Item
                    className="name_and_number_inputs"
                    name="first_name"
                    label="Departure"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your departure location',
                    },
                    ]}
                >
                    <Input placeholder="Please input your departure location" />
                </Form.Item>
                <Form.Item
                 className="name_and_number_inputs"
                 name="last_name"
                 label="Arrival"
                 rules={[
                 {
                     required: true,
                     message: 'Please input your arrival location',
                 },
                 ]}
             >
                 <Input placeholder="Please input your arrival location" />
             </Form.Item>

             

                <Form.Item 
                className="name_and_number_inputs"
                name="date" 
                label="DatePicker"
                 {...this.state.config}>
                    <DatePicker />
                </Form.Item>
               
                <Form.Item 
                className="name_and_number_inputs"
                name="time" 
                label="TimePicker" 
                {...this.state.config}>
                    <TimePicker />
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