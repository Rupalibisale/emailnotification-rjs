import React from 'react';

// import React, { useState } from 'react';

import './Studentlogin.css';
// import Parentlogin from './Parentlogin';
// import Mobileapp from './Mobileapp';
// import Appadvanced from './Appadvanced';


function Studentlogin(){

  // const[studentlogin,setStudentlogin]= useState(true);
  //  const[parentlogin, setParentlogin] = useState(false);
  //  const[mobileapp,setMobileapp] = useState (false);
  //  const[appadvanced,setAppadvanced] = useState (false);
  
  

    return(
        <>
        
        <div className='mainx-div'>
        {/* <div className="yy">
   <ul>
   <li>Organization </li>  &nbsp;&nbsp;/ &nbsp;&nbsp;
   <li> Manage Menus </li>  &nbsp;&nbsp;/ &nbsp;&nbsp;
   <li> Manage Student/Parent Mobile App Menu</li> 
   </ul>
   </div> */}
   {/* <hr></hr> */}
   {/* <div className="mm">
                <p>Manage Student/Parent Mobile App Menu</p>
    </div> */}
        {/* <div className='pagex-div'> */}
        {/* <div className='containerx-div'> */}
        {/* <div className="containerx-nav"> */}


             {/* <div className="btn-group" role="tablist">
                <button>Student Login Menus</button>
                <button>Parent Login Menus</button>
                <button>Mobile app Banners</button>
                <button>App Advanced Setting</button>
              </div>  */}


{/* <div className='divbutton'>
       <button onClick={() => {setStudentlogin(!studentlogin);setParentlogin(false); setAppadvanced(false); setMobileapp(false)}}>Student Login Menus</button>
       <button onClick={() => {setParentlogin(!parentlogin);setStudentlogin(false); setAppadvanced(false); setMobileapp(false)}}>Parent Login Menus</button>
       <button onClick={() =>{setMobileapp(!mobileapp);setStudentlogin(false);setParentlogin(false); setAppadvanced(false)}}>Mobile app Banners</button>
       <button onClick={() => {setAppadvanced(!appadvanced);setMobileapp(false);setStudentlogin(false);setParentlogin(false)}}>App Advanced Setting</button>
       </div>
       <div className='dashmain1'> 
       {studentlogin && <Studentlogin/>}
       {parentlogin && <Parentlogin/>}
       {mobileapp && <Mobileapp/>}
       {appadvanced && <Appadvanced/>}
       
</div>    */}

       
            {/* </div> */}

            
    

            



    {/* for the table  */}
    <div className="tablex-x">
    <div class="table-responsive">
    <table class="table table-bordered">
      <thead className="thead-dark">
        <tr>
          <th>SNo</th>
          <th>Group Name</th>
          <th>Menu Name</th>
          <th>Menu Title</th>
          <th>Menu Sequence No</th>
          <th>Icon</th>
          <th>Favourite Icon</th>
          <th>Status</th>
          <th>Is Favourite</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>SIS</td>
          <td>anecdotes</td>
          <td>anecdotes (default English)</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>

      <tbody>
        <tr>
          <td>2</td>
          <td>SIS</td>
          <td>ApplyStydentLeave</td>
          <td>ApplyStudentLeave (default English)</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>

      <tbody>
        <tr>
          <td>3</td>
          <td>SIS</td>
          <td>ApplyTC</td>
          <td>ApplyTC (default English)</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
    </div>


        
        </div>
           {/* </div>
            </div> */}
          
        </>
    )
}
export default Studentlogin;