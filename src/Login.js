import React from 'react';
import Userfront from "@userfront/core";
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './styles/loginStyles.css';
import {BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import logo from './images/for_logo2.png';

Userfront.init("demo1234");

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : "",

        };
    }
    onFinish(values){
        console.log('Success:', values);
    }

    onFinishFailed(errorInfo){
        console.log('Failed:', errorInfo);
    }

    handleInputChange(e){
        e.preventDefault();
        this.setState(this.props);
        const target = e.target;
        this.setState({
            [target.name]:target.value,
        });
    }

    handleSubmit(e){
        e.preventDefault();
        Userfront.login({
            method:"password",
            email:this.state.email,
            password:this.state.password,
        });
    }

    render(){
        return(
            <div>
                <div>
                <img id="logo" src={logo} alt="Logo" />
                </div>
                <div id="form_container">
                    <Form
                        id="login_form"
                        name="basic"
                        onSubmit={this.handleSubmit}
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        autoComplete="off"
                        >
                        <Form.Item
                            className="input_field"
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            className="input_field"
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item 
                        
                        wrapperCol={{ offset: 8, span: 16 }}>
                           
                            <Link to="/Destination">
                                <Button type="primary" htmlType="submit">
                                Submit
                                </Button>

                            </Link>
                            
                        </Form.Item>
                    </Form>

                </div>
            </div>

        );
    }
}

export default Login;