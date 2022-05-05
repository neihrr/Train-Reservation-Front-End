import React from 'react';
import '../styles/PopUpStyle.css'
import { useNavigate } from 'react-router-dom';
import {
    Form,
    Input,
    InputNumber,
    Cascader,
    Select,
    Row,
    Col,
    Option,
    Checkbox,
    Button,
    AutoComplete,
  } from 'antd';
  import {BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

    class PopUpBook extends React.Component{
      constructor(props){
          super(props);
          this.history = this.props.navigation;
          this.checked = false;
          this.onChange = this.onChange.bind(this);
          this.reservation = {
              userId: "",
              first_name: "",
              last_name : "",
              date : "",
              arrival : "",
              time : "",
              seatInfo : "",
              carInfo : "",
              departure : "",
              cost : "",
              phone_number : "",
              isAlert:false
          }
          this.state = {
            formItemLayout:{
                labelCol: {
                    xs: { span: 24 },
                    sm: { span: 8 },
                  },
                  wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 16 },
                  },
            },
            tailFormItemLayout:{
                wrapperCol: {
                    xs: {
                      span: 24,
                      offset: 0,
                    },
                    sm: {
                      span: 16,
                      offset: 8,
                    },
                  },
            },
            cost:80,
            isChecked:false,
            }
        }

        async handleButtonClick(e){
            const access_token = localStorage.getItem("access_token");
            const user = jwt_decode(access_token);

            console.log("Log: ", 1);

            if(user === undefined || user === null){
                alert("Please log in before applying a booking form.");
                localStorage.clear();
                return;
            }

            console.log("Log: ", 2);

            const carDep = localStorage.getItem("carValueDeparture");
            const carRet =  localStorage.getItem("carValueReturn");
            const seatDep = localStorage.getItem("seatValueDeparture");
            const seatRet =  localStorage.getItem("seatValueReturn");

            const date = localStorage.getItem("date");
            const departure = localStorage.getItem("departure");
            const cost = localStorage.getItem("cost");
            const arrival = localStorage.getItem("arrival");
            var dateOfReturn = null;
            var type = "ONE_WAY";
            
            if(carDep !== null && carRet !== null){
                 dateOfReturn = localStorage.getItem("returnDate");
                 type = "ROUND_TRIP";
            }

            const reservationCreateRequest = {
                userId : user.sub,
                firstName : this.reservation.first_name,
                lastName : this.reservation.last_name,
                date : date,
                departure : departure,
                cost : 80,
                arrival : arrival,
                phoneNumber : this.reservation.phone_number,
                type : type,
                dateOfReturn : dateOfReturn,
                departureCar : carDep,
                departureSeat : seatDep,
                returnCar : carRet,
                returnSeat : seatRet,
            };

            console.log("TESTT");

            const res = await axios.post("http://localhost:3001/reservation", reservationCreateRequest)
            .then(res => console.log(res))
            .catch((err)=>{
                console.log(err);

            });
            console.log(res);

            localStorage.clear();
            localStorage.setItem("access_token", access_token);
            localStorage.setItem("cost", cost);

            this.history("/PurchaseSuccess");
        }

        onChange = (e) =>{
            this.checked = !this.checked;
            this.setState({isChecked : this.checked});
        };

        changed(e){
            if(e.target.id !== undefined){
                switch(e.target.id){
                    case 'first_name' : {
                        this.reservation.first_name = e.target.value;
                        break;
                    }
                    case 'last_name' : {
                        this.reservation.last_name = e.target.value;
                        break;
                    }
                    case 'phone' : {
                        this.reservation.phone_number = e.target.value;
                        break;
                    } 
                }
            }
        }
       

      
        render(){
            const { Option } = Select;
            const prefixSelector = (
                <Form.Item name="prefix" noStyle>
                <Select style={{ width: 70 }}>
                    <Option value="90">+90</Option>
                    <Option value="92">+92</Option>
                    <Option value="98">+98</Option>
                    <Option value="380">+380</Option>
                    <Option value="1">+1</Option>
                    <Option value="30">+30</Option>
                    <Option value="31">+31</Option>
                    <Option value="32">+32</Option>
                    <Option value="33">+33</Option>
                    <Option value="36">+36</Option>
                    <Option value="39">+39</Option>
                    <Option value="40">+40</Option>
                    <Option value="41">+41</Option>
                    <Option value="43">+43</Option>
                    <Option value="44">+44</Option>
                    <Option value="45">+45</Option>
                    <Option value="47">+47</Option>
                    <Option value="48">+48</Option>
                    <Option value="49">+49</Option>
                 
                    
                </Select>
                </Form.Item>
        );

       
       

        return(
            <>
                <div className='brand-nav'>RAIL-AWAY</div>
                <Form className="form_parent" {...this.state.formItemLayout}
           
            name="book"
            initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
            prefix: '86',}}>

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
                    <Input id = "first_name" placeholder="Please input your first name" onChange = {(e) => this.changed(e)} />
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
                    <Input id = "last_name" placeholder="Please input your last name" onChange = {(e) => this.changed(e)} />
                </Form.Item>

                <Form.Item
                    className="phone_field"
                    name="phone"
                    label="Phone Number"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                    <Input id = "phone" addonBefore={prefixSelector} onChange = {(e) => this.changed(e)} style={{ width: '36.5%' }} />
                </Form.Item>
                <Checkbox className="check_box"  onClick ={(e) => this.onChange(e)}>I agree to pay ${this.state.cost} for this purchase.</Checkbox>
                <br/>
                {
                  
                    (this.state.isChecked && !this.state.isAlert) ? 
                    <Button className="purchase_button" type="primary" onClick ={async (e) => this.handleButtonClick(e)}>BOOK ${this.state.cost}</Button>
                    :
                    <Button className="notchecked_purchase_button" type="primary" onClick ={async (e) => await this.handleButtonClick(e)} disabled>BOOK ${this.state.cost}</Button>
                }
                
        </Form>
        <div className="brand-footer">@ 2022 RAIL-AWAY - All Rights reserved.</div>

            </>
            
        );
    }

}

export default function(props) {
    const navigation = useNavigate();
    return <PopUpBook {...props} navigation={navigation} />;
}