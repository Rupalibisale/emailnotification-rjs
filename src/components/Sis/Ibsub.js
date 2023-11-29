import React from 'react';
import './Ibcam.css';

function Ibsub(){
    return(
        <>
          <div className="subz">
            <div className="suby">
            <div className="zx">
                <ul>
                <li>SIS </li>  &nbsp;&nbsp;/ &nbsp;&nbsp;
                <li> Subject </li>  &nbsp;&nbsp;/ &nbsp;&nbsp;
                <li> IB Subject</li>
                </ul>
            </div>
            
            <div className="zx">
                <ul>
                <h4>Create IB Subjects </h4>  
                
                </ul>
            </div>

            <div className="zy">
              <div className="pone">
                <lable className="text-primary">Branch Type</lable>
                
                <div className="dropdownz">
                <select id="sel1" classNAme="input-group-sm" style={{ width: '300px' }}>
        <option>School</option>  
        <option>Junior College</option> 
      </select>  <p className="text-primary">(AY:2023-2024)</p>
                </div>
               </div>

               <div className="ptwo">
                <lable className="text-primary">PYP/MYP/DP/career</lable>
                
                <div className="dropdownz">
                <select id="sel1"  className="input-group-sm" style={{ width: '300px' }}>
        <option>Pre Kindergarten</option>  
        <option>XX</option> 
      </select>  
                </div>
               </div>

              

            </div>

            <div className="zx">
               
                <p>No Classess Found.. </p>  
                
             
            </div>

            </div>
           
            </div>     
        </>
    )
}
export default Ibsub;