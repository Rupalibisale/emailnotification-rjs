import React from 'react';
import "./Oraganization.css";

// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';


// import Sysadmin from './components/Sysadmin';
// import Sysadmin from './Sysadmin';



// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript

function Organization(){
    return(
      <>
      



<div className="yy">
   <ul>
  <li>Organization </li> /
  <li> Manage Menus </li> /
  <li> Organize Menus </li> 
</ul> 
</div>
<hr></hr>


        <div className='mainz-div'>

        <div className='pagez-div'>

       <div className="containerz-div">
      <div className="containerz-responsive">
<div style={{ marginRight: '80px' }}><h5>Organize Menus (Enterprice)</h5></div>
    

<div className="dropdown"  style={{ marginRight: '80px' }} >
<select class="btn btn-default dropdown-toggle"  type="button" id="menu1" data-toggle="dropdown" name="selectoption" required>
              <option value="pre-school">Organizaation</option>
              <option value="grade1">
                {/* <Router><Route path="/sysadmin" component={Sysadmin} /></Router> */}
SysAdmin</option>
              <option value="grade2">Acadamic Incharge(Corporate)</option>
              <option value="grade3">SysAdmini</option>

              <option value="grade4">Branch</option>

              <option value="grade5">Principal</option>

              <option value="grade6">Computer Operator</option>
              

          </select>

</div>


<div className="dropdown"  style={{ marginRight: '80px' }} >
<select class="btn btn-default dropdown-toggle"  type="button" id="menu1" data-toggle="dropdown" name="selectoption" required>
<option value="pre-school">ERP</option>

              {/* <option value="pre-school">Organizaation</option>
              <option value="grade1">SysAdmin</option>
              <option value="grade2">Acadamic Incharge(Corporate)</option>
              <option value="grade3">SysAdmini</option>

              <option value="grade4">Branch</option>

              <option value="grade5">Principal</option>

              <option value="grade6">Computer Operator</option> */}
              

          </select>

</div>

<div style={{ marginRight: '10px' }}>
<button type="button" class="btn btn-primary">Manage Modules</button> 
</div>
<hr></hr>
 
</div>
<hr />

<div class="table-responsive">          
<table class="table table-hover">
<thead>
<tr style={{ height: '60px' }}>
  <th></th>
  <th></th>
  
</tr>
</thead>
<tbody>
<tr style={{ height: '60px' }}>
  <td style={{ color: 'blue' }}>Organization</td>
  <td>Enabled <i class="fa-solid fa-angle-down"></i></td>
  
</tr>

<tr style={{ height: '60px' }}>
  <td style={{ color: 'blue' }}>SIS</td>
  <td><i class="fa-solid fa-circle-check fa-2xl"></i>    <i class="fa-solid fa-angle-down"></i></td>
  </tr>
 <tr style={{ height: '60px' }}>
  <td style={{ color: 'blue' }}>Inventory</td>
  <td><i class="fa-solid fa-circle-check fa-2xl"></i>    <i class="fa-solid fa-angle-down"></i></td>
  </tr>

  <tr style={{ height: '60px' }}>
  <td style={{ color: 'blue' }}>Learner Profile</td>
  <td><i class="fa-solid fa-circle-check fa-2xl"></i>    <i class="fa-solid fa-angle-down"></i></td>
  </tr>

  <tr style={{ height: '60px' }}>
  <td style={{ color: 'blue' }}>Dynamic forms</td>
  <td><i class="fa-solid fa-circle-check fa-2xl"></i>    <i class="fa-solid fa-angle-down"></i></td>
  </tr>

  <tr style={{ height: '60px' }}>
  <td style={{ color: 'blue' }}>Admissions</td>
  <td><i class="fa-solid fa-circle-check fa-2xl"></i>    <i class="fa-solid fa-angle-down"></i></td>
  </tr>

  <tr style={{ height: '60px' }}>
  <td style={{ color: 'blue' }}>Visitor Mgmt</td>
  <td><i class="fa-solid fa-circle-check fa-2xl"></i>    <i class="fa-solid fa-angle-down"></i></td>
  </tr>

  <tr style={{ height: '60px' }}>
  <td style={{ color: 'blue' }}>Transport</td>
  <td><i class="fa-solid fa-circle-check fa-2xl"></i>    <i class="fa-solid fa-angle-down"></i></td>
  </tr>

  <tr style={{ height: '60px' }}>
  <td style={{ color: 'blue' }}>Communication</td>
  <td><i class="fa-solid fa-circle-check fa-2xl"></i>    <i class="fa-solid fa-angle-down"></i></td>
  </tr>

  <tr style={{ height: '60px' }}>
  <td style={{ color: 'blue' }}>Certificates</td>
  <td><i class="fa-solid fa-circle-check fa-2xl"></i>    <i class="fa-solid fa-angle-down"></i></td>
  </tr>

  <tr style={{ height: '60px' }}>
  <td style={{ color: 'blue' }}>Login Statistics</td>
  <td><i class="fa-solid fa-circle-check fa-2xl"></i>    <i class="fa-solid fa-angle-down"></i></td>
  </tr>

  <tr style={{ height: '60px' }}>
  <td style={{ color: 'blue' }}>Library</td>
  <td><i class="fa-solid fa-circle-check fa-2xl"></i><i class="fa-solid fa-angle-down"></i></td>
  </tr>

  <tr style={{ height: '60px' }}>
  <td style={{ color: 'blue' }}>hostel</td>
  <td><i class="fa-solid fa-circle-check fa-2xl"></i>    <i class="fa-solid fa-angle-down"></i></td>
  </tr>

  <tr style={{ height: '60px' }}>
  <td style={{ color: 'blue' }}>Concerns</td>
  <td><i class="fa-solid fa-circle-check fa-2xl"></i>    <i class="fa-solid fa-angle-down"></i></td>
  </tr>

  <tr style={{ height: '60px' }}>
  <td style={{ color: 'blue' }}>SQAA</td>
  <td><i class="fa-solid fa-circle-check fa-2xl"></i>    <i class="fa-solid fa-angle-down"></i></td>
  </tr>
</tbody>
</table>
</div>



  </div>

  </div>
        </div>
      </>
     
        
        
    )
   
    
}
export default Organization;