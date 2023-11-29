import React, { useState } from 'react';
import './Allforms.css';

function Allforms() {
  const [displayedSection, setDisplayedSection] = useState('Student'); // 'Student' is the default section

  const handleClick = (section) => {
    setDisplayedSection(section);
  };

  return (
    <div className="outer-container">

 <div className="label-select">
<label className="text-primary" for="sel1">Academic Year:</label>
 
          <select id="sel1" className="col-sm-6 col-form-label" name="sellist1">
        <option>2023-2024</option>
        <option>2024-2025</option>
        <option>2025-2026</option>
        <option>2026-2027</option>
      </select>
      </div>

<div className="inner-container">


    <div className="mainp">
      <div className="bb">
       
        <div className="divbutton">
          <button onClick={() => handleClick('Student')}>Students Forms</button>
          <button onClick={() => handleClick('Staff')}>Staff Forms</button>
          <button onClick={() => handleClick('Public')}>Public Forms</button>
          <button onClick={() => handleClick('General')}>General Feedback Forms</button>
          <button onClick={() => handleClick('Subject')}>Subject Wise Feedback Forms</button>
          <button onClick={() => handleClick('Survey')}>Survey Forms</button>
        </div>

        <div className="Diff">
          {displayedSection === 'Student' && (
            // Student content
            <div class="table-responsive-sm">
    <table class="table table-bordered">
       <thead>
        <tr>
           <th>SNo. </th>
           <th>Form Name</th>
           <th>Created Date</th>
        
         </tr>
       </thead>
      <tbody>
         <tr>
           <td colspan="3">No Forms Found</td>
          
         </tr>
       </tbody>
     </table>
   </div>
          )}

          {displayedSection === 'Staff' && (
            // Staff content
            <div class="table-responsive-sm">
    <table class="table table-bordered">
       <thead>
        <tr>
           <th>SNo. </th>
           <th>Form Name</th>
           <th>Created Date</th>
        
         </tr>
       </thead>
      <tbody>
         <tr>
           <td colspan="3">No Forms Found</td>
          
         </tr>
       </tbody>
     </table>
   </div>
          )}

          {displayedSection === 'Public' && (
            // Public content
            <div class="table-responsive-sm">
    <table class="table table-bordered">
       <thead>
        <tr>
           <th>SNo. </th>
           <th>Form Name</th>
           <th>Created Date</th>
        
         </tr>
       </thead>
      <tbody>
         <tr>
           <td colspan="3">No Forms Found</td>
          
         </tr>
       </tbody>
     </table>
   </div>
          )}

          {displayedSection === 'General' && (
            // General content
            <div class="table-responsive-sm">
    <table class="table table-bordered">
       <thead>
        <tr>
           <th>SNo. </th>
           <th>Form Name</th>
           <th>Created Date</th>
        
         </tr>
       </thead>
      <tbody>
         <tr>
           <td colspan="3">No Forms Found</td>
          
         </tr>
       </tbody>
     </table>
   </div>
          )}

          {displayedSection === 'Subject' && (
            // Subject content
            <div class="table-responsive-sm">
    <table class="table table-bordered">
       <thead>
        <tr>
           <th>SNo. </th>
           <th>Form Name</th>
           <th>Created Date</th>
        
         </tr>
       </thead>
      <tbody>
         <tr>
           <td colspan="3">No Forms Found</td>
          
         </tr>
       </tbody>
     </table>
   </div>
          )}

          {displayedSection === 'Survey' && (
            // Survey content
            <div class="table-responsive-sm">
    <table class="table table-bordered">
       <thead>
        <tr>
           <th>SNo. </th>
           <th>Form Name</th>
           <th>Created Date</th>
        
         </tr>
       </thead>
      <tbody>
         <tr>
           <td colspan="3">No Forms Found</td>
          
         </tr>
       </tbody>
     </table>
   </div>
          )}
           </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Allforms;
