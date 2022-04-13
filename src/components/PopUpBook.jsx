import React from 'react';
import '../styles/PopUpStyle.css'
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

    class PopUpBook extends React.Component{
      constructor(props){
          super(props);
          this.checked = false;
          this.onChange = this.onChange.bind(this);
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
        componentDidUpdate(){
            if(this.state.isChecked!=false){
                console.log("book available");

            }
            else{
                console.log("nope");
            }
            
        }

        handleButtonClick(e){
            console.log(this.state.isChecked);
        }

        onChange = (e) =>{
            this.checked = !this.checked;
            this.setState({isChecked : this.checked});
        };
       

      
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
                    className="phone_field"
                    name="phone"
                    label="Phone Number"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                    <Input addonBefore={prefixSelector} style={{ width: '36.5%' }} />
                </Form.Item>
                <Checkbox className="check_box"  onClick ={(e) => this.onChange(e)}>I agree to pay ${this.state.cost} for this purchase.</Checkbox>
                <br/>
                {
                    this.state.isChecked ? 
                    <Link to='/PurchaseSuccess'>
                        {localStorage.setItem('cost',this.state.cost)}
                        <Button className="purchase_button" type="primary" onClick ={(e) => this.handleButtonClick(e)}>BOOK ${this.state.cost}</Button>

                    </Link>
                    
                    :
                    <Button className="notchecked_purchase_button" type="primary" onClick ={(e) => this.handleButtonClick(e)} disabled>BOOK ${this.state.cost}</Button>
                }
                
        </Form>

        );
    }

}

export default PopUpBook;