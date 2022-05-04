import React from "react";
import { Form, DatePicker, TimePicker, Tabs ,Button, Input } from 'antd';
import {BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import '../styles/DestStyles.css';
import DestinationForm from './DestinationForm.jsx';
import DestinationRoundForm from './DestinationRoundForm.jsx';
import { StickyContainer, Sticky } from 'react-sticky';



class DestSelection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            departure:"",
            arrival:"",
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
    componentDidUpdate(){
        console.log(this.state.departure);
        console.log(this.state.arrival);
    
    }

    onFinish(values){
        console.log('Success:', values);
    }

    onFinishFailed(errorInfo){
        console.log('Failed:', errorInfo);
    }

    handleArrival(e){
        this.setState({arrival:e.target.value});
        localStorage.setItem('arrival',e.target.value);
    }
    handleDeparture(e){
        this.setState({departure:e.target.value});
        localStorage.setItem('departure',e.target.value);
    }
    handleTime(e){
        this.setState({time:e.target.value});
        localStorage.setItem('time',e.target.value);
    }
    handleDate(e){
        this.setState({date:e.target.value});
        localStorage.setItem('date',e.target.value);
    }
    handleReturnDate(e){
        this.setState({returnDate:e.target.value});
        localStorage.setItem('returnDate',e.target.value);
    }
    

    render(){
        const { TabPane } = Tabs;
        const renderTabBar = (props, DefaultTabBar) => (
            <Sticky bottomOffset={80}>
              {({ style }) => (
                <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
              )}
            </Sticky>
          );
        return(
            <>
            <div className='brand-nav'>RAIL-AWAY</div>
            <StickyContainer className="tab-container">
                <Tabs defaultActiveKey="1" classname="tab-bar" renderTabBar={renderTabBar} centered>
                    <TabPane className="first-tab" tab="One Way" key="1" >
                        <DestinationForm></DestinationForm>    
                    </TabPane>
                
                    <TabPane className="second-tab" tab="Round Trip" key="2">
                        <DestinationRoundForm></DestinationRoundForm>
                    </TabPane>
               </Tabs>
            </StickyContainer>
            <div className="brand-footer">@ 2022 RAIL-AWAY - All Rights reserved.</div>

            </>
            
        );
    }
}

export default DestSelection;