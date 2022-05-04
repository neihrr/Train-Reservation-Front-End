import React from 'react';
import { useNavigate } from 'react-router';
import {Row, Col, Button } from 'antd';
import '../styles/selectCarStyles.css';
import SelectSeat from '../components/SelectSeat';

class Cars extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            carValues:['A','B','C','D','E','F','G','H',"I",'J','K','L'],  
        }

        this.history = this.props.navigation;
        

    }

    handleChange = (index) =>{
        
        if(this.props.departure){
            localStorage.setItem("carValueDeparture", this.state.carValues[index]);
        }else{
            localStorage.setItem("carValueReturn", this.state.carValues[index]);
        }

        const _departure = localStorage.getItem("carValueDeparture");
        const _return = localStorage.getItem("carValueReturn");

        if(_departure && _return){
            this.history("/SelectSeatRound");
        }
        
    }
    render(){
        return(
            <>
            <Row className='outer-row-car' classgutter={16}>
                    <Col className='gutter-row-car' span={6}>
                        <div className='car-container-first' style={this.style}>
                            <Button type='primary' onClick={()=>this.handleChange(0)}>A</Button>
                        </div>
                    </Col>
                    <Col className='gutter-row-car' span={6}>
                        <div className='car-container-first' style={this.style}>
                            <Button type='primary' onClick={()=>this.handleChange(1)}>B</Button>
                        </div>
                    </Col>
                    <Col className='gutter-row-car' span={6}>
                        <div className='car-container-first' style={this.style}>
                            <Button type='primary' onClick={()=>this.handleChange(2)}>C</Button>
                        </div>
                    </Col>
                    <Col className='gutter-row-car' span={6}>
                        <div className='car-container-last' style={this.style}>
                            <Button type='primary' onClick={()=>this.handleChange(3)}>D</Button>
                        </div>
                    </Col>
                </Row>
                <Row className='outer-row-car' gutter={16}>
                    <Col className='gutter-row-car' span={6}>
                        <div className='car-container' style={this.style}>
                            <Button type='primary' onClick={()=>this.handleChange(4)}>E</Button>
                        </div>
                    </Col>
                    <Col className='gutter-row-car' span={6}>
                        <div className='car-container' style={this.style}>
                           <Button type='primary' onClick={()=>this.handleChange(5)}>F</Button>
                        </div>
                    </Col>
                    <Col className='gutter-row-car' span={6}>
                        <div className='car-container' style={this.style}>
                            <Button type='primary' onClick={()=>this.handleChange(6)}>G</Button>

                        </div>
                    </Col>
                    <Col className='gutter-row-car' span={6}>
                        <div className='car-container' style={this.style}>
                            <Button type='primary' onClick={()=>this.handleChange(7)}>H</Button>
                        </div>
                    </Col>
                </Row>
                <Row className='outer-row-car' gutter={16}>
                    <Col className='gutter-row-car' span={6}>
                        <div className='car-container' style={this.style}>
                            <Button type='primary' onClick={()=>this.handleChange(8)}>I</Button>
                        </div>
                    </Col>
                    <Col className='gutter-row-car' span={6}>
                        <div className='car-container' style={this.style}>
                            <Button type='primary' onClick={()=>this.handleChange(9)}>J</Button>
                        </div>
                    </Col>
                    <Col className='gutter-row-car' span={6}>
                        <div className='car-container' style={this.style}> 
                            <Button type='primary' onClick={()=>this.handleChange(10)}>K</Button>
                        </div>
                    </Col>
                    <Col className='gutter-row-car' span={6}>
                        <div className='car-container' style={this.style}>
                            <Button type='primary' onClick={()=>this.handleChange(11)}>L</Button>
                        </div>
                    </Col>
                </Row>
                </>
        );
    }
}

export default function(props) {
    const navigation = useNavigate();
    return <Cars {...props} navigation={navigation} />;
}