import React from 'react';
import {Row, Col, Button } from 'antd';
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import '../styles/selectSeatStyles.css'
class SelectSeat extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
       
        this.state={
       
            seatValues:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
            
        };
    }
    handleClickCount = () => {
    
        console.log(this.state.clickCount);
    }
    handleChange = (index) =>{
        localStorage.setItem('seat',this.state.seatValues[index]);
    }
    render(){
      
        const carValue = localStorage.getItem('carValue');
        
        
        return(
            <>
            <div className="brand-nav">RAIL-AWAY</div>
            <div className="container">
            <h1 className="context">Select Seat from Car {carValue}</h1>
            <Row className="outer-row-first" classgutter={16}>
                    <Col className="gutter-row" span={6}>
                        <div className="car-container-first" style={this.style}>
                            <Link to="/PopUp">
                            <Button type="primary"  onClick={()=>this.handleChange(0) }>1</Button>

                            </Link>
                        
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="car-container-first" style={this.style}>
                        <Link to="/PopUp">
                            <Button type="primary" onClick={()=>this.handleChange(1)}>2</Button>
                            </Link>
                            
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="car-container-first" style={this.style}>
                        <Link to="/PopUp">
                            <Button type="primary"  onClick={()=>{this.handleChange(2);}}>3</Button>
                            </Link>
                            
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="car-container-last" style={this.style}>
                        <Link to="/PopUp">
                            <Button type="primary" onClick={()=>{this.handleChange(3); }}>4</Button>
                            </Link>
                            
                        </div>
                    </Col>
                </Row>
                <Row className="outer-row-first" classgutter={16}>
                    <Col className="gutter-row" span={6}>
                        <div className="car-container-first" style={this.style}>
                        <Link to="/PopUp">  
                            <Button type="primary" onClick={()=>this.handleChange(4)}>5</Button>

                            </Link>   
                        
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="car-container-first" style={this.style}>
                        <Link to="/PopUp">
                            <Button type="primary"  onClick={()=>this.handleChange(5)}>6</Button>
                            </Link>
                            
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="car-container-first" style={this.style}>
                        <Link to="/PopUp">
                            <Button type="primary" onClick={()=>this.handleChange(6)}>7</Button>

                            </Link>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="car-container-last" style={this.style}>
                        <Link to="/PopUp">
                            <Button type="primary" onClick={()=>this.handleChange(7)}>8</Button>

                            </Link>                           
                        </div>
                    </Col>
                </Row>
                <Row className="outer-row-first" classgutter={16}>
                    <Col className="gutter-row" span={6}>
                        <div className="car-container-first" style={this.style}>
                        <Link to="/PopUp"> 
                            <Button type="primary" onClick={()=>this.handleChange(8)}>9</Button>

                            </Link>    
                        
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="car-container-first" style={this.style}>
                        <Link to="/PopUp">
                            <Button type="primary" onClick={()=>this.handleChange(9)}>10</Button>
                            </Link>
                         
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="car-container-first" style={this.style}>
                        <Link to="/PopUp">
                            <Button type="primary"  onClick={()=>this.handleChange(10)}>11</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="car-container-last" style={this.style}>
                        <Link to="/PopUp">
                            <Button type="primary" onClick={()=>this.handleChange(11)}>12</Button>

                            </Link>   
                        </div>
                    </Col>
                </Row>
                <Row className="outer-row-first" classgutter={16}>
                    <Col className="gutter-row" span={6}>
                        <div className="car-container-first" style={this.style}>
                        <Link to="/PopUp">
                            <Button type="primary" onClick={()=>this.handleChange(12)}>13</Button>
                            </Link>
                         
                        
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="car-container-first" style={this.style}>
                        <Link to="/PopUp">
                            <Button type="primary" onClick={()=>this.handleChange(13)}>14</Button>
                            </Link>
                         
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="car-container-first" style={this.style}>
                        <Link to="/PopUp">
                            <Button type="primary" onClick={()=>this.handleChange(14)}>15</Button>

                            </Link>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="car-container-last" style={this.style}>
                        <Link to="/PopUp">
                            <Button type="primary" onClick={()=>this.handleChange(15)}>16</Button>

                            </Link>   
                        </div>
                    </Col>
                </Row>
                <Row className="outer-row-first" classgutter={16}>
                    <Col className="gutter-row" span={6}>
                        <div className="car-container-first" style={this.style}>
                        <Link to="/PopUp">  
                            <Button type="primary" onClick={()=>this.handleChange(16)}>17</Button>

                            </Link> 
                        
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="car-container-first" style={this.style}>
                        <Link to="/PopUp">
                            <Button type="primary" onClick={()=>this.handleChange(17)}>18</Button>

                            </Link>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="car-container-first" style={this.style}>
                        <Link to="/PopUp">
                            <Button type="primary"  onClick={()=>this.handleChange(18)}>19</Button>

                            </Link>    
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="car-container-last" style={this.style}>
                        <Link to="/PopUp">
                            <Button type="primary" onClick={()=>this.handleChange(19)}>20</Button>

                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row className="outer-row-first" classgutter={16}>
                    <Col className="gutter-row" span={6}>
                        <div className="car-container-first" style={this.style}>
                        <Link to="/PopUp">
                            <Button type="primary" onClick={()=>this.handleChange(20)}>21</Button>

                            </Link>    
                        
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="car-container-first" style={this.style}>
                        <Link to="/PopUp">
                            <Button type="primary" onClick={()=>this.handleChange(21)}>22</Button>
                            </Link>
                           
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="car-container-first" style={this.style}>
                        <Link to="/PopUp">
                            <Button type="primary" onClick={()=>this.handleChange(22)}>23</Button>

                            </Link>   
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="car-container-last" style={this.style}>
                        <Link to="/PopUp">
                            <Button type="primary" onClick={()=>this.handleChange(23)}>24</Button>

                            </Link>  
                        </div>
                    </Col>
                </Row>


            </div>
                
                
            </>

           
        );
    }
    
}

export default SelectSeat;