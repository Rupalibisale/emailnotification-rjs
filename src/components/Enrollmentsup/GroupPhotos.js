import React from 'react';
import './GroupPhotos.css';

function GroupPhotos() {
  return (
    <div className='photo-container'>
        <div className='photo-nav'>
            <ul className='photo-list'>
                <li><a  className='photo-list-1'>SIS</a></li> &nbsp; /&nbsp;
                <li><a  className='photo-list-2'>Enrollments</a></li> &nbsp; /&nbsp;
                <li><a  className='photo-list-3'>Class Group Photos</a></li>
            </ul>
        </div>

        <div className="heading">
             <h3>Class Group Photos</h3>
        </div>

        <div className='photosection-1'>
                <div className='photo-para'>
                   <p className='photo-para-1'>Academic Year</p>
                   <p className='photo-para-2'>Branch</p>
               </div>
    
               <div className='photo-three-option'>
                <div className='photo-first-option'>
                <select name="subject" id="subject" className='hh'>
                        <option value="" selected="selected" className='active'>2023-2024</option>
                        <option value="" selected="selected">2022-2023</option>
                        <option value="" selected="selected">2021-2022</option>  
                     </select>
                </div>
    
                <div className='photo-second-option'>
                <select  className='hh1'>
                        <option value="" selected="selected" className='active' placeholder='Select Branch'>--All--</option>
                         <option value="" ></option>
                     </select>
                </div>
    
                <div className='photo-forth-option'>
                    <button>Get</button>
                </div>
    
            </div>
            </div>

      
    </div>

  )
}

export default GroupPhotos