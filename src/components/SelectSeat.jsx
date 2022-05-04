import React from 'react';
import Seats from '../components/Seats';

class SelectSeat extends React.Component{
    
    
    render(){
      
        const carValue = localStorage.getItem('carValue');
        console.log(carValue);
        
        return(
            <>
            <div className="brand-nav-seat">RAIL-AWAY</div>
            <div className="container-seat">
            <h1 className="context-seat">Choose Your Seat from Car {carValue}</h1>
            <Seats></Seats>
            </div>
            <div className="brand-footer-seat">@ 2022 RAIL-AWAY - All Rights reserved.</div>
                   
            </>

           
        );
    }
    
}

export default SelectSeat;