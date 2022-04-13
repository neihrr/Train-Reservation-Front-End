import React from 'react';



class AdminPanel extends React.Component {
    constructor(props){
        super(props);
        this.data = [{fname:"nehir",lname:"cesmeci",dep:"buffalo",car:"B",seat:20,cost:80},
        {fname:"dou",lname:"sonmez",dep:"istanbul",car:"c",seat:19,cost:80}];
        
        
    }
    returnCustomers (data){
        const items = data.map((customer)=>{
     
            <p>{customer.fname}</p>
        })

    }
 
  

   
    render(){
        
       
        return(
            
            <div>
                <button onClick={()=>this.returnCustomers(this.data)}>click</button>
            </div>
           
        );
    }

}
export default AdminPanel;