import React from 'react';
import './StudentTransfer.css';

function StudentTransfer() {
  return (
    <div className='transfer-container'>
        <div className='transfer-nav'>
            <ul className='transfer-list'>
                <li><a  className='transfer-list-1'>SIS</a></li> &nbsp; /&nbsp;
                <li><a   className='transfer-list-2'>Enrollments</a></li> &nbsp; /&nbsp;
                <li><a  className='transfer-list-3'>Bulk Student Branch Transfer</a></li>
            </ul>
        </div>

        <div className="heading">
             <h3>Students Branch Transfer</h3>
        </div>

        <div className='section-1'>
                <div className='transfer-para'>
                   <p className='transfer-para-1'>Current AY</p>
                   <p className='transfer-para-2'>Branch</p>
                   <p className='transfer-para-3'>Current Class</p>
                   <p className='transfer-para-4'>Current Section</p>

               </div>
    
               <div className='transfer-three-option'>
                <div className='transfer-first-option'>
                <select name="subject" id="subject" className='hh'>
                        <option value="" selected="selected" className='active'>2023-2024</option>
                        <option value="" selected="selected">2022-2023</option>
                        <option value="" selected="selected">2021-2022</option>  
                     </select>
                </div>
    
                <div className='transfer-second-option'>
                <select  className='hh1'>
                        <option value="" selected="selected" className='active' placeholder='Select Branch'>Select Branch</option>
                         <option value="" ></option>
                     </select>
                </div>
    
                <div className='transfer-third-option'>
                <select  className='hh2'>
                        <option value="" selected="selected" className='active'>--Select Class--</option>
                         <option value="" ></option>
                     </select>
                </div>

                <div className='transfer-fifth-option'>
                <select  className='hh3'>
                        <option value="" selected="selected" className='active'>--All Sections--</option>
                         <option value="" ></option>
                     </select>
                </div>
    
    
                <div className='transfer-forth-option'>
                    <button>Get</button>
                </div>
    
            </div>
            </div>

      
    </div>
  )
}

export default StudentTransfer;