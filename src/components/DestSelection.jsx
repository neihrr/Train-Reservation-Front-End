import React from "react";
import { Form, DatePicker, TimePicker, Button, Input } from 'antd';
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
            <Form name="time_related_controls" {...this.state.formItemLayout} onFinish={this.onFinish}>
                <Form.Item
                    className="name_and_number_inputs"
                    name="first_name"
                    label="Name"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your first first name',
                    },
                    ]}
                >
                    <Input placeholder="Please input your first name" />
                </Form.Item>
                <Form.Item
                 className="name_and_number_inputs"
                 name="last_name"
                 label="Last Name"
                 rules={[
                 {
                     required: true,
                     message: 'Please input your last name',
                 },
                 ]}
             >
                 <Input placeholder="Please input your last name" />
             </Form.Item>

             <Form.Item
                 
                 className="name_and_number_inputs"
                 label="Number"
                 rules={[
                 {
                     required: true,
                     message: 'Please input your number',
                 },
                 ]}
             >
                 <Input placeholder="Please input your last number" />
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
                    <Button 
                    className="check_button"
                    type="primary" 
                    htmlType="submit">
                    Check for Seats
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default DestSelection;