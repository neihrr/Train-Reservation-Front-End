import React from 'react';
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

    class PopUpBook extends React.Component{
      constructor(props){
          super(props);
          
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
        onChange = (e) =>{
            const newState = !(this.state.isChecked);
            this.setState({isChecked:newState});
            console.log(this.state.isChecked);
        }; 

      
        render(){
            const { Option } = Select;
            const prefixSelector = (
                <Form.Item name="prefix" noStyle>
                <Select style={{ width: 70 }}>
                    <Option value="86">+86</Option>
                    <Option value="87">+87</Option>
                </Select>
                </Form.Item>
        );

       
       

        return(
            <Form {...this.state.formItemLayout}
           
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
                    name="phone"
                    label="Phone Number"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                </Form.Item>
                <Checkbox onClick={(e)=>this.onChange(e)}>I agree to pay ${this.state.cost} for this purchase.</Checkbox>
                <br/>
                <Button type="primary">BOOK ${this.state.cost}</Button>
        </Form>

        );
    }

}

export default PopUpBook;