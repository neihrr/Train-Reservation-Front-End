import React from 'react';
import Userfront from "@userfront/core";
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './styles/loginStyles.css';
import {BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import logo from './images/for_logo2.png';

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors,cors, same-origin
      cache: 'no-cache', // default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include,same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, follow, error
      referrerPolicy: 'no-referrer', // no-referrer,no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
async function send(u,p){
    const response = await postData('http://localhost:3001/auth/login',
    {username:u,
    password:p});
    console.log(response);
    return response;
}

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : "",
        };
    }

    async onFinish(){
        const res =  await send(this.state.username,this.state.password);
        localStorage.setItem('access_token', res.access_token);
        console.log(res.access_token);
        return res;
    }

    onFinishFailed(errorInfo){
        console.log('Failed:', errorInfo);
    }

    handleInputChange(e){
       this.setState({
            username:e.target.value
        });
    }

    handlePasswordChange(e){
        //e.target input field'ı temsil ediyor
        //e.target.value input field'ın içerisine girilen değeri temsil ediyor
        this.setState({
            password:e.target.value
        }
        )
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
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={async ()=>await this.onFinish()}
                        onFinishFailed={()=>this.onFinishFailed()}
                        autoComplete="off"
                        >
                        <Form.Item
                            className="input_field"
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input  onChange={(e)=>this.handleInputChange(e)}/>
                        </Form.Item>

                        <Form.Item
                            className="input_field"
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password onChange={(e)=>this.handlePasswordChange(e)}/>
                        </Form.Item>

                        <Form.Item 
                        
                        wrapperCol={{ offset: 8, span: 16 }}>
                           
                            <Link to='/Destination'>
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