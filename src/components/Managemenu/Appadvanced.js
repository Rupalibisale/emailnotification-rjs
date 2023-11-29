import React from 'react';
import './Appadvanced.css';


function Appadvanced(){
    return(
        <>


<div className='mainx-div'>
               
                
                <div className='pagex-div'>
                    <div className='containerx-div'>
              
                        <div className="btable">
                            <div className="btnx" style={{ textAlign: 'right' }}>
                                <button type="button" className="btn btn-primary">Manage Branch Wise App Urls </button>
                            </div>

    {/* for the table */}

    <div class="container-fluid">
    
    <table>
  <tr>
    <td><h4>School Name: </h4></td>
    <td>Ethiken Education Society</td>
    <td><i class="fa-regular fa-pen-to-square"></i></td>
  </tr>
  <tr>
    <td><h4>App Name:</h4></td>
    <td>Ethiken Education Society</td>
    <td><i class="fa-regular fa-pen-to-square"></i></td>
  </tr>
  <tr>
    <td><h4>Android App Url:</h4></td>
    <td>https://play.google.com/store/apps/details?id=com.mcb.myclassboard.activity</td>
    <td><i class="fa-regular fa-pen-to-square"></i></td>
  </tr>
  <tr>
    <td><h4>IOS App Url:</h4></td>
    <td>https://apps.apple.com/us/app/mydashboard-parent-portal/id1266182786</td>
    <td><i class="fa-regular fa-pen-to-square"></i></td>
  </tr>
  <tr>
    <td><h4>Upload App Logo:</h4></td>
    <td>Logo</td>
    <td><i class="fa-regular fa-pen-to-square"></i></td>
  </tr>
  
</table>


</div>
   </div>
            </div>
        </div>
     </div>



        </>
    )
}
export default Appadvanced;