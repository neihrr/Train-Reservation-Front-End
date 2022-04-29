import React from "react";
import{Button} from 'antd';
import '../styles/PurchaseStyles.css';
import check from '../images/download.png';
import {BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { DollarOutlined, CloseCircleOutlined } from "@ant-design/icons";
class PurchaseSuccess extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <div className='brand-nav'>RAIL-AWAY</div>
                <div>
                    <h1 className="caption"><img className="check_image" src={check} alt="Check"/>Purchase Succesful!</h1>
                    <p className="purchase_message">Total cost of purchase: ${localStorage.getItem('cost')}</p>
                    <Link to="/Cancellation">
                        <Button className="cancel" type="primary">Cancel<CloseCircleOutlined /></Button>
                    </Link>
                    <Link to="/Destination">
                        <Button className="cont" type="primary">Continue to Purchase<DollarOutlined /></Button>
                    </Link>
                    <br/>
                
                    <Link to="/">
                        <Button className="sign_out" type="primary" >Sign Out</Button>
                    </Link>
                </div>
                <div className="brand-footer">@ 2022 RAIL-AWAY - All Rights reserved.</div>

            </>
        );
    }

}
export default PurchaseSuccess;