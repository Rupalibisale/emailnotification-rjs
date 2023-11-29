import React, { useState } from 'react';
import './Emailvalidation.css';

const Emailvalidation = () => {
  const[user,setUser] = useState(false);
  const[school,setSchool] = useState(false);

  return (
    <div className='email-contain'>

        <div className='email-nav'>
            <ul className='email-list'>
                <li><a  className='email-list-1'>SIS</a></li> &nbsp; /&nbsp;
                <li><a   className='email-list-2'>Enrollments</a></li> &nbsp; /&nbsp;
                <li><a   className='email-list-3'>Email Syntax Validator</a></li>
            </ul>
        </div>

        <div className='em-syntax'>
            <p className='em-syntax-p'>Email Syntax Validation</p>
            <b>Note:</b>
            <p className='em-syntax-p1'>1. Red Color Indicates Invalid Syntax Email.</p>
            <p className='em-syntax-p1'>2. Green Color Indicates Valid Syntax Email.</p>

        </div>

        <div className='email-subsection'>
            <div className='email-btn'>
               <button onClick={ () => {setUser(!user); setSchool(false);  }}>Student Email Syntax Validation</button>
               <button onClick={ () => {setSchool(!school); setUser(false); }}>Staff Email Syntax Validation</button>
            </div>
            <div>
            {user && <UserMenu />}
            {school && <SchoolFeedback />}
            
          </div>
         </div>   
    </div>

       
  )
}
const UserMenu =() =>{
        return(
                <>
                <div className='subsection-1'>
                <div className='email-para'>
                   <p className='email-para-1'>Branch</p>
                   <p className='email-para-2'>Class</p>
                   <p className='email-para-3'>Section</p>
               </div>
    
               <div className='email-three-option'>
                <div className='email-first-option'>
                <select name="subject" id="subject" className='hh'>
                        <option value="" selected="selected" className='active'>Ethiken Educational Society</option>
                        <option value="" selected="selected">Nizamabad</option>
                        <option value="" selected="selected">Ethiken Educational Society</option>  
                     </select>
                </div>
    
                <div className='email-second-option'>
                <select  className='hh1'>
                        <option value="" selected="selected" className='active'>--All--</option>
                         <option value="" ></option>
                     </select>
                </div>
    
                <div className='email-third-option'>
                <select  className='hh2'>
                        <option value="" selected="selected" className='active'>--All--</option>
                         <option value="" ></option>
                     </select>
                </div>
    
                <div className='email-forth-option'>
                    <button>Get</button>
                </div>
    
            </div>
            </div>
                </>
        )
}
const SchoolFeedback = () =>{
        return(
                <>
                <div className='subsection-1'>
                <div className='email-para'>
                   <p className='email-para-1'>Branch:</p>
                   <p className='email-para-2'>Departments:</p> 
               </div>
    
               <div className='email-three-option'>
                <div className='email-first-option'>
                <select name="subject" id="subject" className='hh'>
                        <option value="" selected="selected" className='active'>Ethiken Educational Society</option>
                        <option value="" selected="selected">Nizamabad</option>
                        <option value="" selected="selected">Ethiken Educational Society</option>  
                     </select>
                </div>
    
                <div className='email-second-option'>
                <select  className='hh1'>
                        <option value="" selected="selected" className='active'>--All--</option>
                         <option value="" ></option>
                     </select>
                </div>
    
                <div className='email-forth-option'>
                    <button>Get</button>
                </div>
    
            </div>
            </div>
          </>
        )
}

export default Emailvalidation;