import React from 'react';
import Userfront from "@userfront/core";
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './styles/loginStyles.css';
import {BrowserRouter as Router,Routes, Route, Link, useLocation,
    useNavigate,
    useParams} from 'react-router-dom';
import axios from 'axios';
import logo from './images/for_logo2.png';
import jwt_decode from 'jwt-decode';
import { getKeyThenIncreaseKey } from 'antd/lib/message';
import { ExclamationOutlined} from '@ant-design/icons';

async function send(u,p){
    const response = await axios.post('http://localhost:3001/auth/login',
    {   
        username:u,
        password:p
    }).catch(e => alert("Login failed"));
    return response;
}

class Login extends React.Component{
    constructor(props){
        super(props);
        this.user={};
        this.navigation = this.props.navigation;
        this.state = {
            username : "",
            password : "",
            role:"",
        };
    }

    

    async onFinish(){
        let path = "/";
  

        const res =  await send(this.state.username,this.state.password);
        
        localStorage.setItem('access_token', res.data.access_token);

        console.log(res.data.access_token);

        this.user = jwt_decode(res.data.access_token);

        switch(this.user.role)
        {
            case "admin" : {path = "/AdminPanel"; break;}
            case "user" : {path = "/Destination"; break;}
   
        }

        this.navigation(path)
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
        this.setState({
            password:e.target.value
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
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
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
                            
                            <Button type="primary" htmlType="submit" onClick = {()=>this.onFinish()}>  
                                Sign In
                            </Button>
                                        
                        </Form.Item>
                    </Form>

                </div>
            </div>

        );
    }
}

export default function(props) {
    const navigation = useNavigate();
  
    return <Login {...props} navigation={navigation} />;
  }