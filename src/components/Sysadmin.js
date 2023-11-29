import React from 'react';
import "./Sysadmin.css";
  

function Sysadmin(){
    
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


<div className='mainy-div'>
        <div className='pagey-div'>
            <div className='containery-div'>



<div className="containery">
<form class="form-inline">
    <div style={{ marginLeft: '40px' }}>
<label for="role" className="dropdown"   style={{ marginRight: '80px' }}>Role:</label><br></br>
<select class="form-control"  type="button" id="menu1" data-toggle="dropdown" name="selectoption" required>
<option value="pre-school">SysAdmin</option>
</select>
</div>
<div style={{ marginLeft: '40px' }}>
<label for="role" className="dropdown"  style={{ marginRight: '80px' }}>Type:</label><br></br>
<select class="form-control"  type="button" id="menu1" data-toggle="dropdown" name="selectoption" required>
<option value="pre-school">ERP</option>
</select>
</div>


</form>

</div>


<div className="custom-underline"></div>


<div className="aa">
<p>Subscribe Mudules</p>
</div>
{/* <hr style={{border:'1.5px blue'}}></hr> */}
<div>
<hr></hr>
</div>



<div class="row">
  <div class="col-sm-2"><div class="boxDiv"><i class="fa-solid fa-square-check fa-xl"></i>      Organization</div></div>
  <div class="col-sm-2"><div class="boxDiv"><i class="fa-solid fa-square-check fa-xl"></i>     SIS</div></div>
  <div class="col-sm-2"><div class="boxDiv"><i class="fa-solid fa-square-check fa-xl"></i>     Inventory</div></div>
  <div class="col-sm-2"><div class="boxDiv"><i class="fa-solid fa-square-check fa-xl"></i>     Learner Profile</div></div>
  <div class="col-sm-2"><div class="boxDiv"><i class="fa-solid fa-square-check fa-xl"></i>     Dynamic forms</div></div>
  <div class="col-sm-2"><div class="boxDiv"><i class="fa-solid fa-square-check fa-xl"></i>     Admissions</div></div>
  <div class="col-sm-2"><div class="boxDiv"><i class="fa-solid fa-square-check fa-xl"></i>     Visitor Mgmt</div></div>
  <div class="col-sm-2"><div class="boxDiv"> <i class="fa-solid fa-square-check fa-xl"></i>    Transport</div></div>
  
  <div class="col-sm-2"><div class="boxDiv"> <i class="fa-solid fa-square-check fa-xl"></i>     Communication</div></div>
  <div class="col-sm-2"><div class="boxDiv"> <i class="fa-solid fa-square-check fa-xl"></i>     Certificates</div></div>
  <div class="col-sm-2"><div class="boxDiv"><i class="fa-solid fa-square-check fa-xl"></i>     Login Statistics</div></div>
  <div class="col-sm-2"><div class="boxDiv"><i class="fa-solid fa-square-check fa-xl"></i>      Library</div></div>
  <div class="col-sm-2"><div class="boxDiv"><i class="fa-solid fa-square-check fa-xl"></i>     Hostel</div></div>
  <div class="col-sm-2"><div class="boxDiv"><i class="fa-solid fa-square-check fa-xl"></i>     Concern</div></div>
  <div class="col-sm-2"><div class="boxDiv"><i class="fa-solid fa-square-check fa-xl"></i>     SQAA</div></div>

</div>
<div>
<form >
        <button type="submit" className="btn btn-primary">Updates</button>
      </form>
      <div className="custom-underlinez"></div>

     
 </div>

 <hr style={{border:'1.2px solid blue'}}></hr>

 <div className="aa">
<p>Other Available Modules</p>
</div>

<div className="custom-underlinez"></div>
<div class="bb">
    <div>
        <p>Student <br></br>Loans</p>
    </div>
    <div>
        <p>Automated <br></br>Alerts</p>
    </div>
    </div>
    {/* <hr style={{border:'1.2px light blue'}}></hr> */}
    <div className="custom-underlinez"></div>

   
<div class="cc">
    <p>Mont & PP <br></br>Assesment</p>
</div>
<div className="custom-underlinez"></div>


</div>
</div>
</div>

     </>
    )
}
export default Sysadmin;