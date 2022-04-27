import React from 'react';
import {Row, Col, Button } from 'antd';
import '../styles/selectCarStyles.css';
import {BrowserRouter as Router,Routes, Route, Link  } from 'react-router-dom';
import SelectSeat from '../components/SelectSeat';

class SelectCar extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            style:{
                background: '#0092ff', 
                padding: '8px 0',
            },
            carValues:['A','B','C','D','E','F','G','H',"I",'J','K','L']
        };
    }

    handleChange = (index) =>{
        localStorage.setItem('carValue',this.state.carValues[index]);
    }
    render(){
    

        return(
            <>
            <div className='brand-nav'>RAIL-AWAY</div>
            <div className='container'>
                <h1 className='context'>Select a Car</h1>
                <Row className='outer-row' classgutter={16}>
                    <Col className='gutter-row' span={6}>
                        <div className='car-container-first' style={this.style}>
                            <Link to='/SeatSelection'>
                            <Button type='primary' onClick={()=>this.handleChange(0)}>A</Button>

                            </Link>
                        
                        </div>
                    </Col>
                    <Col className='gutter-row' span={6}>
                        <div className='car-container-first' style={this.style}>
                        <Link to='/SeatSelection'>
                            <Button type='primary' onClick={()=>this.handleChange(1)}>B</Button>

                            </Link>
                        </div>
                    </Col>
                    <Col className='gutter-row' span={6}>
                        <div className='car-container-first' style={this.style}>
                        <Link to='/SeatSelection'>
                            <Button type='primary' onClick={()=>this.handleChange(2)}>C</Button>

                            </Link>
                        </div>
                    </Col>
                    <Col className='gutter-row' span={6}>
                        <div className='car-container-last' style={this.style}>
                        <Link to='/SeatSelection'>
                            <Button type='primary' onClick={()=>this.handleChange(3)}>D</Button>

                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row className='outer-row' gutter={16}>
                    <Col className='gutter-row' span={6}>
                        <div className='car-container' style={this.style}>
                        <Link to='/SeatSelection'>
                            <Button type='primary' onClick={()=>this.handleChange(4)}>E</Button>

                            </Link>
                        </div>
                    </Col>
                    <Col className='gutter-row' span={6}>
                        <div className='car-container' style={this.style}>
                        <Link to='/SeatSelection' component={()=> <SelectSeat carValue={this.state.f}/>}>
                            <Button type='primary' onClick={()=>this.handleChange(5)}>F</Button>

                            </Link>
                        </div>
                    </Col>
                    <Col className='gutter-row' span={6}>
                        <div className='car-container' style={this.style}>
                        <Link to='/SeatSelection'>
                            <Button type='primary' onClick={()=>this.handleChange(6)}>G</Button>

                            </Link>
                        </div>
                    </Col>
                    <Col className='gutter-row' span={6}>
                        <div className='car-container' style={this.style}>
                        <Link to='/SeatSelection'>
                            <Button type='primary' onClick={()=>this.handleChange(7)}>H</Button>

                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row className='outer-row-last' gutter={16}>
                    <Col className='gutter-row' span={6}>
                        <div className='car-container' style={this.style}>
                        <Link to='/SeatSelection'>
                            <Button type='primary' onClick={()=>this.handleChange(8)}>I</Button>

                            </Link>
                        </div>
                    </Col>
                    <Col className='gutter-row' span={6}>
                        <div className='car-container' style={this.style}>
                        <Link to='/SeatSelection'>
                            <Button type='primary' onClick={()=>this.handleChange(9)}>J</Button>

                            </Link>
                        </div>
                    </Col>
                    <Col className='gutter-row' span={6}>
                        <div className='car-container' style={this.style}> 
                        <Link to='/SeatSelection'>
                            <Button type='primary' onClick={()=>this.handleChange(10)}>K</Button>

                            </Link>
                        </div>
                    </Col>
                    <Col className='gutter-row' span={6}>
                        <div className='car-container' style={this.style}>
                        <Link to='/SeatSelection'>
                            <Button type='primary' onClick={()=>this.handleChange(11)}>L</Button>

                            </Link>
                        </div>
                    </Col>
                </Row>
            </div>
          

            </>
            
        );
    }
    
}

export default SelectCar;